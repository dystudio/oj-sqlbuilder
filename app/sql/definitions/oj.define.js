/* global window, OJ, Ext:true */

(function _defineIIFE() {

    /**
     * Define declares a new class on the ExtJs namespace
    */
    OJ.lift('define', function _OjDefine(name, props) {
        return Ext.define(name, props);

    });

}());