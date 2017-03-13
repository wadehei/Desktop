//视图和模型不能直接联系，数据的改变要通过控制器


angular.module('starter.controllers', [])

    .controller('homeCtrl', function ($scope, $rootScope, $state, $http, Products, Flash) {
        // Flash只能在首页控制器中引入，才能在秒杀页面数据，否则得到胡数据为null
        setTimeout(function () {
            $scope.products = Products.all()
            var swiper = new Swiper('.swiper-container', {
                //autoplay:4000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            });

        }, 0)

    })

    .controller('LikeCtrl', function ($scope, $rootScope, $state) {

        if ($rootScope.user) {
            $state.go('tab.like.logined');
            return;
        } else {
            $state.go('tab.like.login');
            return;
        }


    })

    .controller('ContactCtrl', function ($scope) {
    })

    .controller('CartCtrl', function ($scope, $stateParams) {

    })

    .controller('SettingCtrl', function ($scope, $rootScope, $state) {

        if ($rootScope.user) {
            $state.go('tab.setting.logined');
            return;
        } else {
            $state.go('tab.setting.login');
            return;
        }


    })
    .controller('LoginCtrl', function ($scope, $rootScope, $state, $http) {
        console.log('login')
        $scope.formData = {};

        $scope.signin = function () {
            console.log($scope.formData)
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:3000/login',
                data: $.param($scope.formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Accept': '*/*'
                }
            }).success(function (data) {
                if (data.code == 'success') {
                    console.log(data)
                    new Alert('登录成功,返回首页', function () {
                        
                        $rootScope.user=data.data.name;            
                        console.log($rootScope.user);    
                        $state.go('tab.index.home');
                    }).show();
                } else if (data.code == 'passerror') {
                    new Alert('密码错误',function(){
                        $state.go('^.login');
                    }).show();
                }
            })


            // $rootScope.user = { name: 'yby' };
            // // $state.go('tab.index.home');
        }
        // $scope.register = function () {
        //     $rootScope.registerFlag=true;
        //     $state.go('tab.setting.register');
        // }
    })
    .controller('lLoginedCtrl', function ($scope, $rootScope, $state) {
        console.log('nihao')
        $scope.toggle = function ($event) {
            var $this = $($event.target);
            $this.addClass('on').siblings().removeClass('on');
            console.log($('.like_main'))
            // $('.like_main section').eq($this.index()).css('display', 'block').siblings().css('display', 'none');

        }


    })
    .controller('sLoginedCtrl', function ($scope, $rootScope, $state) {
        $scope.signout = function () {
            new Confirm('确定退出登录', function () {
                $rootScope.user = null;
                $state.go('tab.index.home');
            }, function () {
                $state.go('tab.setting.logined');
            }).show();

        }
    })
    .controller('registerCtrl', function ($scope, $rootScope, $state, $http) {
        $scope.formData = {};
        $scope.register = function () {
            console.log('nihao')
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:3000/register',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Accept': '*/*'
                },
                data: $.param($scope.formData)
            }).success(function (data) {
                if (data.code == 'success') {
                    new Alert('注册成功,返回首页', function () {
                        $state.go('tab.index.home');
                    }).show();
                } else {
                    new Alert('' + data.message, function () {
                        $state.go('tab.setting.register');
                    }).show();
                }

            })
        }
    })
    .controller('categoryCtrl', function ($scope, $rootScope, $state, $http, $window) {
        var swiper = new Swiper('.swiper-container', {
            autoplay: 4000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    })
    .controller('flashsaleCtrl', function ($scope, $rootScope, $state, Flash) {
        $scope.flashArr = Flash.all();
        var swiper = new Swiper('.swiper-container', {
            autoplay: 4000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });




    })
    .controller('pDetailCtrl', function ($scope, $rootScope, $http, $stateParams) {

        $scope.modelChange = function ($event) {
            var $this = $($event.target);
            if ($this.attr('class') == 'model ng-binding activated') {
                $this.attr('class', 'brand ng-binding activated');
                $('.selected').html($('.brand').html() + ' ' + $this.html());
            } else {
                $this.attr('class', 'model ng-binding activated');
                $('.selected').html('');
            }
        }

        $scope.colorChange = function ($event) {
            var $this = $($event.target);
            if ($this.attr('class') == 'color brand ng-binding activated') {
                $this.addClass('on').siblings().removeClass('on');
            } else {
                $this.attr('class', 'color brand ng-binding activated');
            }
        }

        $scope.toggle = function ($event) {
            var $this = $($event.target);
            $this.addClass('on').siblings().removeClass('on');
            $('.show_cnt section').eq($this.index()).fadeIn().css('display', 'block !important').siblings().css('display', 'none');
        }

        $http({
            method: 'GET',
            url: 'http://127.0.0.1:3000/getProduct?id=' + $stateParams.id,
        }).success(function (data) {
            $scope.product = data.data
            $scope.commentLength = $scope.product.comment.length;
            console.log($scope.product);
        })
    })