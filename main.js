
var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/deal-doc-quyen-ao-khoac-phao-nam-bomber-tre-trung-ca-tinh-chan-bong-3-lop-cuc-am-ntd-men-jk-068-i2063433832-s9640529309.html?spm=a2o4n.tm80174714.7667104350.2.5cba9Ppb9PpbIR.5cba9Ppb9PpbIR&priceCompare=skuId%3A9640529309%3Bsource%3Atpp-recommend-plugin-14053%3Bsn%3Abe3dcf62-d5ef-4184-baa4-b04c2eb155ff%3BunionTrace%3A2101418017039094596183134ec731%3BoriginPrice%3A89000%3BvoucherPrice%3A89000%3BdisplayPrice%3A89000%3BsourceTag%3A%23auto_collect%231%24auto_collect%24%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A1%3BbuyerId%3A0%3ButdId%3A-1%3Btimestamp%3A1703909460589&search=campaign&clickTrackInfo=%7B%22mc_app_bztag%22%3A%22%22%2C%22rs%22%3A%221.0205%22%2C%22app_bztag%22%3A%22%22%2C%22pageTypeTwo%22%3A%22Others%22%2C%22spma%22%3A%22a2o4n%22%2C%22moduleUUID%22%3A%227667104350%22%2C%22spmb%22%3A%22tm80174714%22%2C%22type%22%3A%22itemFall%22%2C%22pageTypeTop%22%3A%22Others%22%2C%22userid%22%3A%220%22%2C%22platform%22%3A%22pc%22%2C%22itemid%22%3A%222063433832%22%2C%22gmv%22%3A%220.0%22%2C%22bs%22%3A%224.056113243103027%22%2C%22ctr_score%22%3A%220.7342921%22%2C%22ts2%22%3A%220.0%22%2C%22ind_id%22%3A%22-1%22%2C%22ccr_score%22%3A%220.6066142%22%2C%22pvid%22%3A%22be3dcf62-d5ef-4184-baa4-b04c2eb155ff%22%2C%22pos%22%3A1%2C%22cvr_score%22%3A%220.0610273%22%2C%22juno_layer_bucket%22%3A%22%22%2C%22scm%22%3A%221007.24053.350475%22%2C%22bztag%22%3A%22%22%2C%22pageTypeOne%22%3A%22Others%22%2C%22mc_is_bs%22%3A%220%22%2C%22linkInfo%22%3A%22null%22%2C%22enable_smui_template%22%3A%22%22%2C%22utdid%22%3A%22-1%22%2C%22ms%22%3A%224.0561%22%2C%22mt%22%3A%22NATION2I%22%2C%22i14d%22%3A%220.4384939968585968%22%2C%22is%22%3A%221528%22%2C%22tr_id%22%3A%2223895016%22%2C%22traffic_source%22%3A%22paid%22%2C%22venture%22%3A%22VN%22%2C%22i30d%22%3A%220.4384939968585968%22%2C%22smui_template%22%3A%22-1%22%2C%22domain%22%3A%22bumblebee%22%2C%22pg%22%3A%2280174714%22%2C%22i7d%22%3A%220.4384939968585968%22%2C%22ids%22%3A%220%22%2C%22rank1_score%22%3A%220.020495057106018066%22%2C%22mc_bztag%22%3A%22%22%2C%22i3d%22%3A%220.34237200021743774%22%2C%22config%22%3A%2223895016%22%2C%22i1d%22%3A%220.3006359934806824%22%2C%22enable_smui%22%3A%22false%22%7D',
        target: "_blank",
        price: 12000,
        check: true
    },
    methods: {
        formatPrice() {
            const number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(
                number);
        }
    }
});
