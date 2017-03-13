// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('bottom');//默认为left

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                cache: false,
                abstract: true,
                templateUrl: 'templates/tabs.html' //模板的url
            })

            // Each tab has its own nav history stack:

            .state('tab.index', {
                url: '/index',
                cache: false,
                views: {
                    'tab-index': {
                        templateUrl: 'templates/tab-index.html'
                    }
                }
            })
            .state('tab.index.home', {
                url: '/home',
                cache: false,
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('tab.index.category', {
                url: '/category',
                cache: false,
                templateUrl: 'templates/category.html',
                controller: 'categoryCtrl'
            })
            .state('tab.index.flashsale', {
                url: '/flashsale',
                cache: false,
                templateUrl: 'templates/flashsale.html',
                controller: 'flashsaleCtrl'
            })
            .state('tab.index.pdetail', {
                url: '/pdetail/:id',
                cache: false,
                templateUrl: 'templates/p-detail.html',
                controller: 'pDetailCtrl'
            })
            .state('tab.like', {
                url: '/like',
                cache: false,
                views: {
                    'tab-like': {
                        templateUrl: 'templates/tab-like.html',
                        controller: 'LikeCtrl'
                    }
                }
            })
            .state('tab.like.login', {
                url: '/login',
                cache: false,
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('tab.like.logined', {
                url: '/logined',
                cache: false,
                templateUrl: 'templates/l-logined.html',
                controller: 'lLoginedCtrl'
            })
            .state('tab.like.register', {
                url: '/register',
                cache: false,
                templateUrl: 'templates/register.html',
                controller: 'registerCtrl'
            })

            .state('tab.contact', {
                url: '/contact',
                cache: false,
                views: {
                    'tab-contact': {
                        templateUrl: 'templates/tab-contact.html',
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('tab.cart', {
                url: '/cart',
                cache: false,
                views: {
                    'tab-cart': {
                        templateUrl: 'templates/tab-cart.html',
                        controller: 'CartCtrl'
                    }
                }
            })

            .state('tab.setting', {
                url: '/setting',
                cache: false,
                views: {
                    'tab-setting': {
                        templateUrl: 'templates/tab-setting.html',
                        controller: 'SettingCtrl'
                    }
                }
            })
            .state('tab.setting.login', {
                url: '/login',
                cache: false,
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('tab.setting.logined', {
                url: '/logined',
                cache: false,
                templateUrl: 'templates/s-logined.html',
                controller: 'sLoginedCtrl'
            })
            .state('tab.setting.register', {
                url: '/register',
                cache: false,
                templateUrl: 'templates/register.html',
                controller: 'registerCtrl'
            })

            .state('tab.money', {
                url: '/money',
                cache: false,
                templateUrl: 'templates/register.html',
                controller: 'registerCtrl'
            })


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/index/home');


    });
