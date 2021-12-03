export function cloneStronger(TARGET, map = new Map()) { // 深度克隆
    if (TARGET !== null && typeof (TARGET) === 'object') {
        let cloneTarget = map.get(TARGET)

        if (cloneTarget) {
            return cloneTarget
        }

        if (TARGET instanceof Array) {
            cloneTarget = [];
            map.set(TARGET, cloneTarget);
            TARGET.forEach((e, i) => {
                cloneTarget[i] = cloneStronger(e, map)
            })
        }

        if (TARGET instanceof Object) {
            cloneTarget = {};
            map.set(TARGET, cloneTarget);
            Object.keys(TARGET).forEach(key => {
                cloneTarget[key] = cloneStronger(TARGET[key], map)
            })
        }
        return cloneTarget
    }
    return TARGET
}

export function filterRequestBackData(target) {
    // 过滤数据列表(包含列表数据所在的层级的所有数据)
    let filterData;
    if (target !== null && typeof target === "object") {
        for (const key in target) {
            if (target.hasOwnProperty(key) && typeof target[key] === "object" && target[key] !== null) {
                const TYPE = Object.prototype.toString.call(target[key]).slice(8, -1);
                filterData = TYPE === "Object" && filterRequestBackData(target[key]);
                if (TYPE === "Array") {
                    filterData = {
                        tableData: target[key],
                        total: target.totalCount,
                        pageSize: target.pageSize,
                    };
                }
            }
        }
    }
    return filterData;
}

// filterRequestBackData函数过滤的数据结构参考
let dataOne = {
    code: 200,
    msg: '成功了',
    dataMin: {
        code: 200,
        msg: '这里是第二层',
        dataTwo: {
            msg: '这里是第三层',
            pageNum: 10,
            currentPage: 1,
            data: {
                msg: '这里是第四层',
                pageNum: 10,
                currentPage: 2,
                data: {
                    msg: '这里是第五层',
                    pageNum: 10,
                    currentPage: 3,
                    data: {
                        msg: '这里是第五层',
                        pageNum: 10,
                        currentPage: 4,
                        data: {
                            msg: '到了数据层了',
                            data: [1, 2, 3]
                        }
                    }
                }
            }
        }
    }
}

export function multilArrExtract(target, targetProps = {}) {
    if (target !== null && typeof target === 'object') {
        let cloneTarget = target instanceof Array ? [] : {}
        if (targetProps === null || !Object.keys(targetProps).length) {
            throw new Error('targetProps cannot be empty')
        }
        if (target instanceof Array) {
            target.forEach((item, index) => {
                cloneTarget[index] = multilArrExtract(item, targetProps)
            })

        } else {
            cloneTarget = {}
            Object.values(targetProps).forEach((value, index) => {
                let isGo = Object.keys(target).includes(value.oldProName)
                if (isGo && value.newProName)
                    cloneTarget[value.newProName] = multilArrExtract(target[value.oldProName], targetProps)

                if (isGo && !value.newProName) // 使用同克隆体一样的属性名(参数体不定义的新的属性名)
                    cloneTarget[value.oldProName] = multilArrExtract(target[value.oldProName], targetProps)
            })
        }
        return cloneTarget
    }
    return target
};
let target = [ // 类似的多层数组数据结构
    {
        areaId: "1111130001",
        areaName: "吉林省",
        areaList: [{
            areaId: "1111130101",
            areaName: "长春市",
            areaList: [{
                areaId: "1111130102",
                areaName: "南关区",
                areaList: [{
                    areaId: "1111130301",
                    areaName: "南岭街道",
                    wordIndex: "J",
                    areaList: [],
                    xzCode: "B"
                }],
                wordIndex: "Z"
            }],
            wordIndex: "S",
            xzCode: "130100",
        }],
        wordIndex: "H",
        xzCode: "130000",
    },
    {
        areaId: "1111130001",
        areaName: "辽宁省",
        areaList: [{
            areaId: "1111130101",
            areaName: "沈阳市",
            areaList: [{
                areaId: "1111130102",
                areaName: "和平区",
                areaList: [{
                    areaId: "1111130301",
                    areaName: "新华街道",
                    wordIndex: "J",
                    areaList: [],
                    xzCode: "B"
                }],
                wordIndex: "Z"
            }],
            wordIndex: "S",
            xzCode: "130100",
        }],
        wordIndex: "H",
        xzCode: "130000",
    },
]
let targetProps = { // 定义参数
    argOne: {
        oldProName: 'areaName',
        newProName: 'label',
    },
    argTwo: {
        oldProName: 'areaId',
        newProName: 'value',
    },
    argThree: {
        oldProName: 'areaList',
        // newProName: 'children' 使用原先的属性名
    }
}

export function _accountFormat(val, num, isNeedReverse) {
    let reg = new RegExp("(." + "{" + num + "})", "g")
    let _val = '',
        _index = 0;
    if (isReverse) {
        _index = val.length % num
        _val = _index ? (val.slice(0, _index) + ' ') : ''
    }
    let _sliceVal = val.slice(_index)
    let _res = _val + _sliceVal.replace(/\s/g, '').replace(reg, "$1 ")
    return _res
}

export function accountFormat(val, bol, insert, position) {
    let _toString = val.toString();
    let newString = '';
    let newStringIndex;
    let _inCludePoint = _toString.includes('.');
    _toString = _inCludePoint?_toString:_toString.concat('.00');
    let _pointIndex = _toString.indexOf('.');
    let _initValue = _toString.slice(0, _pointIndex)
    let _extraIndex = _initValue.length % position;
    let _integerIndex = (_toString.slice(0, _pointIndex).length - _extraIndex) / position;
    for(let i=0; i < _integerIndex; i++) {
        newStringIndex = _extraIndex+((i+1)*position)
        newString =  newString.concat(_toString.slice(newStringIndex-position, newStringIndex).concat(insert))
    }
    bol && (newString = _extraIndex?(_toString.slice(0, _extraIndex).concat(insert) + newString) : newString)
    !bol && (newString = _extraIndex?(newString + _toString.slice(0, _pointIndex).slice(-_extraIndex).concat(insert)) : newString)
    newString = newString.slice(0, newString.length-1)
    return newString
}
