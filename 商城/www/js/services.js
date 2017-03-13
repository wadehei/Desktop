angular.module('starter.services', [])

    .factory('Products', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
  
        var products = [
            {
                title: '键盘乐器',
                icon: 'img/piano.png',
                content: [
                    {
                        id: 'p1',
                        picSrc: 'img/p1.jpg',
                        name: '雅马哈数码电刚请',
                        price: '6800'
                    },
                    {
                        id: 'p2',
                        picSrc: 'img/p2.jpg',
                        name: '巴罗克钢琴AX-1',
                        price: '17800'
                    },
                    {
                        id: 'p3',
                        picSrc: 'img/p3.jpg',
                        name: '巴罗克钢琴AX-3',
                        price: '28800'
                    },
                    {
                        id: 'p4',
                        picSrc: 'img/p4.jpg',
                        name: '巴罗克钢琴SK-5',
                        price: '27800'
                    },
                    {
                        id: 'p5',
                        picSrc: 'img/p5.jpg',
                        name: '巴罗克钢琴TS-5P',
                        price: '32000'
                    },
                    {
                        id: 'p5',
                        picSrc: 'img/p6.jpg',
                        name: '哥德堡GL125H3',
                        price: '32000'
                    }
                ]
            },
            {
                title: '打击乐器',
                icon: 'img/drum.png',
                content: [
                    {
                        id: 'd1',
                        picSrc: 'img/d1.jpg',
                        name: '津宝 JBM0318',
                        price: '5800'
                    },
                    {
                        id: 'd2',
                        picSrc: 'img/d2.jpg',
                        name: '津宝 JBP1211',
                        price: '3280'
                    },
                    {
                        id: 'd3',
                        picSrc: 'img/d3.jpg',
                        name: '津宝 JB-5225T',
                        price: '3600'
                    },
                    {
                        id: 'd4',
                        picSrc: 'img/d4.jpg',
                        name: '进行大军鼓',
                        price: '590'
                    },
                    {
                        id: 'd5',
                        picSrc: 'img/d5.jpg',
                        name: '佳玲8寸调音铃鼓',
                        price: '65'
                    },
                    {
                        id: 'd6',
                        picSrc: 'img/d6.jpg',
                        name: '佳玲8寸调音铃鼓',
                        price: '72'
                    }
                ]

            },
            {
                title: '西洋管乐',
                icon: 'img/pipe.png',
                content: [
                    {
                        id: 'pi1',
                        picSrc: 'img/pi1.jpg',
                        name: '爱舍伦斯 圆号',
                        price: '4200'
                    },
                    {
                        id: 'pi2',
                        picSrc: 'img/pi2.jpg',
                        name: '津宝立健次中音号',
                        price: '1020'
                    },
                    {
                        id: 'pi3',
                        picSrc: 'img/pi3.jpg',
                        name: '津宝JBCL-530单簧管',
                        price: '620'
                    },
                    {
                        id: 'pi4',
                        picSrc: 'img/pi4.jpg',
                        name: '津宝JBTPC-775长笛',
                        price: '1080'
                    },
                    {
                        id: 'pi5',
                        picSrc: 'img/pi5.jpg',
                        name: '津宝高音萨克斯',
                        price: '3600'
                    },
                    {
                        id: 'pi6',
                        picSrc: 'img/pi6.jpg',
                        name: 'bB调高音萨克斯',
                        price: '9300'
                    }
                ]
            },
            {
                title: '西洋弦乐',
                icon: 'img/guitar.png',
                content: [
                    {
                        id: 'g1',
                        picSrc: 'img/g1.jpg',
                        name: '卡马４１寸吉他',
                        price: '500'
                    },
                    {
                        id: 'g2',
                        picSrc: 'img/g2.jpg',
                        name: 'kimder民谣吉他',
                        price: '830'
                    },
                    {
                        id: 'g3',
                        picSrc: 'img/g3.jpg',
                        name: '蒂森41寸吉他T210C',
                        price: '520'
                    },
                    {
                        id: 'g4',
                        picSrc: 'img/g4.jpg',
                        name: '41寸缺角民谣吉他',
                        price: '580'
                    },
                    {
                        id: 'g5',
                        picSrc: 'img/g5.jpg',
                        name: '依班娜24品电吉他',
                        price: '1170'
                    },
                    {
                        id: 'g6',
                        picSrc: 'img/g6.jpg',
                        name: '普拉托高档手工吉他',
                        price: '3800'
                    }
                ]
            },
            {
                title: '民族乐器',
                icon: 'img/guzheng.png',
                content: [
                    {
                        id: 'z1',
                        picSrc: 'img/z1.jpg',
                        name: '精品楠木浮雕龙筝',
                        price: '9000'
                    },
                    {
                        id: 'z2',
                        picSrc: 'img/z2.jpg',
                        name: '筝公主黑檀彩贝古筝',
                        price: '3150'
                    },
                    {
                        id: 'z3',
                        picSrc: 'img/z3.jpg',
                        name: '红木高山流水古筝',
                        price: '2400'
                    },
                    {
                        id: 'z4',
                        picSrc: 'img/z4.jpg',
                        name: '敦煌月琴656酸枝木',
                        price: '2700'
                    },
                    {
                        id: 'z5',
                        picSrc: 'img/z5.jpg',
                        name: '敦煌月琴满月式636',
                        price: '550'
                    },
                    {
                        id: 'z6',
                        picSrc: 'img/z6.jpg',
                        name: '红酸枝清水抛光琵琶',
                        price: '8000'
                    }
                ]
            },
            {
                title: '音乐饰品',
                icon: 'img/accessory.png',
                content: [
                    {
                        id: 'a1',
                        picSrc: 'img/a1.jpg',
                        name: '铁人时尚创意装饰品',
                        price: '32'
                    },
                    {
                        id: 'a2',
                        picSrc: 'img/a2.jpg',
                        name: '吉他音乐饰品香水座',
                        price: '35'
                    },
                    {
                        id: 'a3',
                        picSrc: 'img/a3.jpg',
                        name: '帝达铁人模型全套',
                        price: '32'
                    },
                    {
                        id: 'a4',
                        picSrc: 'img/a4.jpg',
                        name: '小提琴图案项链',
                        price: '2700'
                    },
                    {
                        id: 'a5',
                        picSrc: 'img/a5.jpg',
                        name: '萨克斯模型相框',
                        price: '550'
                    },
                    {
                        id: 'a6',
                        picSrc: 'img/a6.jpg',
                        name: '女士音乐饰品项链',
                        price: '8000'
                    }
                ]
            },
            {
                title: '乐器配件',
                icon: 'img/widget.png',
                content: [
                    {
                        id: 'w1',
                        picSrc: 'img/w1.jpg',
                        name: '专业超簿钢琴缓降器',
                        price: '218'
                    },
                    {
                        id: 'w2',
                        picSrc: 'img/w2.jpg',
                        name: '巴罗克指力器',
                        price: '51'
                    },
                    {
                        id: 'w3',
                        picSrc: 'img/w3.jpg',
                        name: '巴罗克透明节拍器',
                        price: '180'
                    },
                    {
                        id: 'w4',
                        picSrc: 'img/w4.jpg',
                        name: '卡打民谣吉他护板',
                        price: '6'
                    },
                    {
                        id: 'w5',
                        picSrc: 'img/w5.jpg',
                        name: '民谣木吉他拨片套装',
                        price: '55'
                    },
                    {
                        id: 'w6',
                        picSrc: 'img/w6.jpg',
                        name: '乐谱架子加厚谱台',
                        price: '48'
                    }
                ]
            },
            {
                title: '图书音像',
                icon: 'img/book.png',
                content: [
                    {
                        id: 'b1',
                        picSrc: 'img/b1.jpg',
                        name: '正版钢琴考级6-8',
                        price: '34.4'
                    },
                    {
                        id: 'b2',
                        picSrc: 'img/b2.jpg',
                        name: '巴赫钢琴书钢琴曲',
                        price: '9'
                    },
                    {
                        id: 'b3',
                        picSrc: 'img/b3.jpg',
                        name: '正版调性视唱教程',
                        price: '41'
                    },
                    {
                        id: 'b4',
                        picSrc: 'img/b4.jpg',
                        name: '杨娜妮古筝教程',
                        price: '56.1'
                    },
                    {
                        id: 'b5',
                        picSrc: 'img/b5.jpg',
                        name: '正版 钢琴古典名曲',
                        price: '46'
                    },
                    {
                        id: 'b6',
                        picSrc: 'img/b6.jpg',
                        name: '声乐卷补充歌曲',
                        price: '49.8'
                    }
                ]
            }


        ]


        return {
            all: function () {
                return products;
            }
        }


    })
    .factory('Flash', function ($http) {
        var flashArr=null;

        $http({
            method: 'GET',
            url: 'http://127.0.0.1:3000/getFlash',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*'
            }
        }).success(function (data) {
            flashArr=data.data;
        })
        return {
            all:function(){
                return flashArr;
            }
        }
    })
    ;
