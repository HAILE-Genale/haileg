var $ZSIQChatWindow = $ZSIQChatWindow || function() {
    var S, l, a, h = 0,
        s = document.documentElement.scrollTop || document.body.scrollTop,
        u = {
            1: "siq_rht",
            2: "siq_rht",
            3: "siq_lft",
            4: "siq_lft",
            5: "siq_lft",
            6: "siq_lft",
            7: "siq_lft",
            8: "siq_rht",
            9: "siq_rht",
            10: "siq_rht",
            11: "siq_rht",
            12: "siq_rht"
        },
        r = function() {
            var e = $ZSIQUtil.getIframe().$Support;
            $zv.question && (window._IS_REVAMP ? IframeHandler.sendPostMessage("question") : e && e.handleVisitorQuestionJsApi())
        },
        p = function(e) {
            if (S.className = S.className.replace(/(?:^|\s)siqhide(?!\S)/, "").replace(/(?:^|\s)siqanim(?!\S)/, ""), e) {
                if (!$ZSIQUtil.getIframe()) return w(), void $ZSIQChatWindow.populateIframe(function() {
                    p(e)
                });
                $ZSIQChat.isOnboarding() ? 2 != $ZSIQWidgetUI.getWidgetState() && $ZSIQWidget.handleCallBacks({
                    "chat.open": ""
                }) : $ZSIQWidget.handleCallBacks({
                    "chat.open": ""
                }), S.className += " siqanim", $ZSIQChatWindow.setLoadContentClass(), r();
                var t = $ZSIQUtil.getIframe().ZSIQTranscript;
                t && t.scroll("", "", !0)
            }! function(e) {
                if (window._IS_REVAMP && $ZSIQWidgetUI.isHandHeldDevice() && document.getElementById("siqiframe").contentDocument.documentElement.setAttribute("device", "mobile-device"), $ZSIQWidgetUI.isHandHeldDevice() && $ZSIQWidgetUI.isAppleDevice()) {
                    var t = document.body,
                        i = document.documentElement;
                    if (t.className = (t.className || "").replace(/(?:^|\s)zsiq_fixedlayout(?!\S)/, ""), !e) return i.scrollTop = s, t.scrollTop = s;
                    s = i.scrollTop || t.scrollTop, t.className += " zsiq_fixedlayout"
                }
            }(e)
        },
        f = function() {
            S.style.top = "-10000px", S.style.display = "block"
        },
        n = function(e, t, i) {
            void 0 === a && (a = 0), clearTimeout(a), $ZSIQUtil.storeCookieVal(e, t, i), a = setTimeout(function() {
                n(e, t, i)
            }, 12e4)
        },
        w = function() {
            $ZSIQWidgetUI.addClass($ZSIQChatWindow.getChatWindowDiv(), "siq_showload"), $ZSIQWidgetUI.addClass($ZSIQWidgetUI.getWidgetDiv(), "zsiqfanim")
        };
    return {
        getChatWindowDiv: function() {
            return S
        },
        isTrackingOnly: function() {
            var e = $ZSIQChat.getWidgetData().widgetobj;
            return 1 == e.istracking && (0 == e.islivechat || 1 == e.hideembed)
        },
        showIframeLoading: w,
        constructIframe: function(e, t) {
            if ($ZSIQCookie.get("isiframeenabled") && !$ZSIQChatWindow.getChatWindowDiv() || !$ZSIQChatWindow.isTrackingOnly() || $ZSIQChat.isPreview()) {
                var i, a = $ZSIQWidget.getEmbedObject(),
                    s = $ZSIQWidget.getWidgetObject(),
                    n = !1,
                    o = $ZSIQChat.isPreview(),
                    r = window._IS_REVAMP,
                    l = $ZSIQUtil.getIframe().$Support,
                    d = $zohosq.nonce,
                    c = null != s.isSeasonalThemeEnabled ? s.isSeasonalThemeEnabled : $ZSIQChat.isSeasonalTheme();
                if (c = c && r && !$ZSIQChatWindow.isBotChatPreview(), S && !_WINDOW_REPOPULATE && (o ? n = !0 : (S.remove(), _WINDOW_REPOPULATE = !1)), n || (S && S.remove(), (S = document.createElement("DIV")).innerHTML = '<div id="siqcht" class="zls-prelative" ><iframe id="siqiframe" title="SalesIQ Chatwindow" seamless="seamless" height="460" width="100%" scrolling="no"></iframe></div>', S.style.visibility = "hidden"), S.className = function() {
                        $ZSIQWidget.getWidgetObject();
                        var e = "";
                        $ZSIQWidget.getWidgetObject().isshowcallbubble && (e = "theme5" === $ZSIQWidget.getWidgetObject().calltheme ? " siq-calthemesign" : "siq-caltheme");
                        var t = $ZSIQChatWindow.isBotChatPreview(),
                            i = $ZSIQWidgetUI.isCSSTransformSupported() ? "zls-sptwndw " + e + " siqembed siqtrans siqhide " : "zls-sptwndw " + e + " siqembed ";
                        i += $ZSIQChat.isPreview() ? "" : "zsiq-mobhgt ", i += $ZSIQChatWindow.isNewHeader() ? "zsiq-newtheme " : "", i += !$ZSIQChatWindow.isOnlyCall() || t || window._IS_REVAMP ? "" : "zsiqdircall ", i += $ZSIQWidgetUI.isHandHeldDevice() ? "mobile-device " : "", i += window._IS_REVAMP && t ? " bot-preview " : "";
                        var a = " zsiq_size" + $ZSIQWidget.getEmbedSize();
                        return $ZSIQChat.isSignatureChat() ? i + a : i + u[$ZSIQWidgetUI.getWidgetPosition()] + a
                    }(), S.setAttribute("embedtheme", a.theme), S.setAttribute("data-id", "zsiqembed"), c ? S.setAttribute("seasonal-type", $ZSIQChat.getSeasonalThemeObj().type) : S.removeAttribute("seasonal-type"), d && S.setAttribute("nonce", d), n) !r && l.init($ZSIQWidget.getEmbedObject());
                else if (function() {
                        var e = $ZSIQChat.getWidgetData().embedobj.einfo.embedid,
                            t = ($ZSIQLSDB.get("ZLD" + e) || {}).ongoingchats || {},
                            i = 0 !== Object.keys(t).length;
                        window._IS_REVAMP && (i = 0 < ((JSON.parse(localStorage.getItem("siq_embed")) || {})[$ZSIQUtil.getLiveLSID()] || {}).ongoingchats);
                        return $ZSIQLSDB.get("ZLDTRIGGER" + e) || $ZSIQLSDB.get("ZLD" + e + "WAITING") || i || $ZSIQChat.isPreview()
                    }() || t || 0 == $zohosq.fileloadtime && $ZSIQWidgetUI.F_WINDOW == $ZSIQWidgetUI.getWidgetState()) $ZSIQChatWindow.populateIframe(t);
                else {
                    var I = a.widget_performance_optimised ? 25e3 : $zohosq.postloadtime || 1e4,
                        g = $zohosq.values || {},
                        m = g.floatwindowvisible || g.chatwindowvisible;
                    m && "show" == m && (I = 0, r && $ZSIQChatWindow.populateIframe(t)), r || (h = setTimeout(function() {
                        $ZSIQChatWindow.populateIframe(t)
                    }, I))
                }! function(e) {
                    $ZSIQChat.getWidgetData().widgettype;
                    var t = $zohosq.values,
                        i = t.floatwindowvisible || t.chatwindowvisible;
                    i ? $ZSIQChatWindow.handleChatWindowVisible(i, e) : $ZSIQWidgetUI.getWidgetState() != $ZSIQWidgetUI.F_WINDOW ? f() : (w(), $ZSIQChatWindow.populateIframe(), p(!0))
                }(e), l && l.Util && l.Util.handleResize && l.Util.handleResize(), (i = $ZSIQUtil.getCookieValue("dragpos")) && (i = JSON.parse(i), S.setAttribute("style", "left:" + i.left + ";top:" + i.top)), this.handleESCEvent()
            }
        },
        populateIframe: function(t, i) {
            if (document.getElementById("siqiframe")) S.className = S.className.replace(/(?:^|\s)siq_showload(?!\S)/, "");
            else {
                !window._IS_DEV && function() {
                    var e = $ZSIQChat.getWidgetData();
                    if (iscdnenabled && !$ZSIQChat.isPreview()) {
                        var t = $zohosq.nonce,
                            i = {};
                        i[SIQ_FLOAT] = "/salesiq/styles/floatbuttonpostload_Pa0WG0fin4SjrnBZjHin5vP3GQC_Nv9XqLM6KV_i-I5DsoInRo88Uwa8oyhuF8bR_.css", i[SIQ_BUTTON] = "/salesiq/styles/buttonthemepostload_z-0zW6ewSp67MQ2RFCD3Sbq0lUcYdQiQTqJHTBe3Wfn2-Z-8JBJ4k9V0feEm6lC-_.css", i[SIQ_PERSONALIZE] = "/salesiq/styles/personalizethemepostload_sLci-XVkHeGTpJncovl4VnwEuWaeUXDvpRK1R-OHriuPdFUR-4GrZBgko_ZeNum3_.css";
                        var a = e.widgetobj,
                            s = JSON.parse(a.sticker)[1].default,
                            n = i[e.widgettype],
                            o = a.cssstaticserver,
                            r = a.csscdnstaticserver,
                            l = o + n,
                            d = n.split("WIDGTHEME"),
                            c = d.join(s);
                        l = void 0 !== cssjslist[c] ? r + (n = "/salesiq" + d[0] + s + "_" + cssjslist[c] + "_" + d[1]) : r + n;
                        var I = document.createElement("link");
                        I.rel = "stylesheet", I.href = l;
                        var g = document.getElementsByTagName("head");
                        $ZSIQChat.notifyOnCDNFailure(I, g, (o + i[e.widgettype]).replace(/WIDGTHEME/g, s), "css"), t && I.setAttribute("nonce", t), g[0].appendChild(I)
                    }
                }(), clearTimeout(h), document.body.appendChild(S), (0 == $zohosq.fileloadtime || i) && w();
                var e = document.getElementById("siqiframe"),
                    a = (e.contentWindow || e.contentDocument.document || e.contentDocument).document,
                    s = $ZSIQChatWindow.getFiles(),
                    n = function() {
                        $ZSIQWidgetUI.checkWidgetVisibility($ZSIQUtil.isChatExist());
                        var e = $ZSIQUtil.getIframe().$Support;
                        e && !_IS_REVAMP && (e.handleStatusCallback(), e.handleAudioCallback()),
                            function() {
                                if ($ZSIQChat.getWidgetData().widgettype == SIQ_PERSONALIZE) {
                                    var e = $ZSIQLSDB.get("ZLDPERSONALIZE");
                                    e && $zoho.salesiq.chat.department($ZSIQWidgetUI.getUserDeptMapping()[e])
                                }
                            }(), t && t(), S.className = S.className.replace(/(?:^|\s)siq_showload(?!\S)/, ""), i && i(), $ZSIQUtil.idetifyVisitorData(), IframeHandler.loadExternalFiles(), r()
                    };
                if (window._IS_REVAMP) {
                    this.handleRevampLoad = n;
                    var o = function() {
                        var t = e.contentDocument;
                        t.open(), t.close(), s.forEach(function(e) {
                            $zohosq.nonce && e.setAttribute("nonce", $zohosq.nonce), t.head.appendChild(e)
                        })
                    };
                    "complete" === a.readyState ? o() : e.onload = o
                } else e.onload = n, a.open(), a.write(s), a.close()
            }
        },
        handleIframeLoading: function(e) {
            !$ZSIQChatWindow.getChatWindowDiv() && $ZSIQChatWindow.isTrackingOnly() ? ($ZSIQCookie.set("isiframeenabled", !0, 864e5, !0), $ZSIQChatWindow.constructIframe(!1, e)) : e && e()
        },
        handleESCEvent: function(e) {
            var t = e ? e.parent : window;
            (e = e || window).document.addEventListener("keydown", function(e) {
                27 == e.keyCode && (document.querySelector(".notify-cookie") ? $ZSIQNotifyCookie.closeBanner(e) : t.$ZSIQChatWindow.closeImagePreview(e, !0))
            })
        },
        RemoveLoadingForTrigger: function() {
            $ZSIQChatWindow.getChatWindowDiv() && $ZSIQChatWindow.getChatWindowDiv().classList.remove("siq_showload"), delete $ZSIQUTSAction.widget_interaction, clearTimeout($ZSIQChatWindow.triggerloader)
        },
        isBotChatPreview: function() {
            return !!$ZSIQChat.isPreview() && window.parent.IS_BOT_PREVIEW
        },
        openChatWindow: function(e, t, i) {
            if (!e && !i) try {
                $UTSHandler.updateAction({
                    type: "1"
                })
            } catch (e) {}
            S.hasAttribute("drag") || (S.style.top = ""), $ZSIQWidgetUI.isCSSTransformSupported() ? (p(!0), $ZSIQUTSAction.widget_interaction && (w(), $ZSIQChatWindow.triggerloader = setTimeout(function() {
                $ZSIQChatWindow.RemoveLoadingForTrigger()
            }, 2e3))) : S.style.display = "block";
            var a = $ZSIQWidgetUI.getWidgetDiv();
            try {
                var s = $ZSIQWidgetUI.getMinWidgetDiv();
                $ZSIQWidgetUI.addClass(s, "zsiqfanim")
            } catch (e) {
                $ZSIQWidgetUI.addClass(a, "zsiqfanim")
            }
            if ($ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_WINDOW), IframeHandler.sendPostMessage("iframestate", !0), $ZSIQUtil.getIframe().$Support) {
                "true" == a.getAttribute("data-autochat") && $ZSIQUtil.getIframe().$Support.handleAPIFunctionalities("chatstart");
                var n = $ZSIQUtil.getIframe().$Support;
                n.getUnreadCount() && !n.isConversationUIFocussed() && (n.sendReadCall(), n.removeUnreadCookie(), $ZSIQWidgetUI.removeUnreadCount()), $ZSIQUtil.getIframe().$UI && !$ZSIQChat.isPreview() && setTimeout(function() {
                    $ZSIQUtil.getIframe().$UI.handleComponentFocus(), $ZSIQUtil.startChatwindowOnload()
                }, 500)
            }
        },
        forceOpenChatWindow: function() {
            $ZSIQUtil.getIframe().$Support.getParent().$ZSIQWidgetUI.removeCallClass(), $ZSIQUtil.getIframe().$Support.contentdiv = null, $ZSIQUtil.getIframe().$Support.EmbedObj.lchid = -1, $ZSIQUtil.getIframe().$Support.checkAndShowUI(-1), $ZSIQUtil.getIframe().CallImpl.isCallWithChat = !1, $ZSIQUtil.getIframe().$EmbedManger.setQuitStatus(!1)
        },
        expandChatWindow: function() {
            var e = $ZSIQChat.getWidgetData().widgettype;
            e != SIQ_FLOAT && e != SIQ_PERSONALIZE || ($ZSIQWidgetUI.getWidgetDiv().style.display = "none");
            "-10000px" == S.style.top && (S.style.top = ""), $ZSIQWidgetUI.isCSSTransformSupported() ? p(!0) : S.style.display = "block", $ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_WINDOW)
        },
        closeChatWindow: function(e) {
            $ZSIQUtil.stopBlinking(), e ? $ZSIQChat.isOnboarding() && $ZSIQWidget.handleCallBacks({
                "floatwindow.minimize": ""
            }) : $ZSIQWidget.handleCallBacks({
                "chat.close": ""
            }), p(), S.className = S.className.replace(/(?:^|\s)remtrans(?!\S)/, ""), IframeHandler.sendPostMessage("iframestate", !1);
            try {
                var t = $ZSIQUtil.getAPIValues(),
                    i = $ZSIQUtil.getIframe().$Support,
                    a = i.isChatExist() ? i.getRecentLiveChatid() : -1;
                if ("hide" == t.floatvisible && (t.customhtml || -1 == a)) return void $ZSIQWidgetUI.setWidgetState(-1 != a && null != a ? $ZSIQWidgetUI.F_BUTTON : $ZSIQWidgetUI.F_STICKER)
            } catch (e) {}
            var s = $ZSIQWidgetUI.getWidgetDiv();
            s.className = s.className.replace(/(?:^|\s)zsiqfanim(?!\S)/, "");
            var n = !1;
            try {
                if (a && -1 != a) {
                    var o = $ZSIQWidgetUI.getMinWidgetDiv();
                    o.className = o.className.replace(/(?:^|\s)zsiqfanim(?!\S)/, "")
                }
                n = $ZSIQWidgetUI.isStickerMinimized()
            } catch (e) {}
            $ZSIQWidgetUI.setWidgetState(-1 != a && null != a || n ? $ZSIQWidgetUI.F_BUTTON : $ZSIQWidgetUI.F_STICKER);
            var r = $ZSIQWidget.getWidgetObject();
            if ($ZSIQChat.getWidgetData().widgettype == SIQ_FLOAT && "8" == r.sticker[1].default) {
                try {
                    var l = $ZSIQUtil.getIframe().$Support.EmbedObj,
                        d = $ZSIQUtil.getIframe().$Support.getCookieValue("ZLD" + l.livelsid)["attname_" + l.visitorID]
                } catch (e) {}
                d && (document.getElementById("zsiq_maintitle").innerText = d);
                var c = document.getElementById("zsiq_chatbtn");
                c && (c.style.display = 1 == $ZSIQUtil.getCookieValue("state") ? "none" : "block")
            }
            $ZSIQWidgetUI.checkWidgetVisibility(a)
        },
        minimizeChatWindow: function() {
            if (!$ZSIQChat.isPreview()) {
                if (!$ZSIQUtil.getIframe().$Support.isChatExist()) {
                    var e = document.getElementById("zsiq_maintitle");
                    if (e) {
                        var t = $ZSIQWidget.getWidgetObject(),
                            i = t.title[1].online ? t.title[1].online : t.i18nkeys["float.online.maintitle"];
                        t.status || (i = t.title[1].offline ? t.title[1].offline : t.i18nkeys["float.offline.maintitle"]);
                        var a = $ZSIQUtil.getAPIValues().buttontexts;
                        a && (t.status && a[0] ? i = a[0][0] || i : !t.status && a[1] && (i = a[1][0] || i)), e.innerHTML = $ZSIQUtil.getEncodedText(i)
                    }
                }
                $ZSIQChat.getWidgetData().widgettype == SIQ_PERSONALIZE && $ZSIQLSDB.remove("ZLDPERSONALIZE"), $ZSIQChatWindow.closeChatWindow(!0);
                var s = $ZSIQUtil.getIframe().$Support,
                    n = IframeHandler.getTriggerCookie();
                if (s.isChatExist() || n) $ZSIQWidgetUI.minimizeSticker();
                else {
                    var o = $ZSIQWidget.getWidgetObject();
                    if ("1" == o.sticker[1].default) {
                        var r = document.getElementById("titlediv");
                        $ZSIQUtil.containsClass(r, "zsiq_min") && (r.className = r.className.replace(/(?:^|\s)zsiq_min(?!\S)/, ""))
                    } else if ("2" == o.sticker[1].default) {
                        var l = document.getElementById("zsiq_float");
                        $ZSIQUtil.containsClass(l, "zsiq_min") && (l.className = l.className.replace(/(?:^|\s)zsiq_min(?!\S)/, ""))
                    }
                }
                $ZSIQWidget.handleCallBacks({
                    "floatwindow.minimize": ""
                }), $ZSIQUtil.isCHatwindowMinimized = !0, $ZSIQUtil.getIframe().avUIhandler && $ZSIQUtil.getIframe().avUIhandler.handleMinimizeState()
            }
        },
        handleChatWindowVisible: function(e, t, i, a, s) {
            if ($ZSIQChatWindow.isBotChatPreview()) $ZSIQChatWindow.openChatWindow(!0);
            else if (!t)
                if (!0 !== $ZSIQWidget.getWidgetObject().hideembed) {
                    var n = $ZSIQUtil.getAPIValues().floatwindowvisible;
                    s = s || n, (e = e || n) && ("hide" != e || $ZSIQWidgetUI.getWidgetState() != $ZSIQWidgetUI.F_WINDOW && !$ZSIQChat.isPreview() ? "show" == e ? ($ZSIQChatWindow.openChatWindow(!1, a, s), i && !$ZSIQUtil.getIframe().$Support.isChatExist() && $ZSIQUtil.getIframe().$Support.openClassicUI()) : !isNaN(e) && 0 < e && setTimeout($ZSIQChatWindow.openChatWindow, 1e3 * e, s) : $ZSIQChatWindow.closeChatWindow(!0))
                } else S.style.display = "none"
        },
        handleDrag: function(e) {
            var t = S,
                i = e.split("#"),
                a = l || (l = {
                    chtX: S.offsetWidth,
                    chtY: S.offsetHeight
                }),
                s = a.chtX,
                n = a.chtY,
                o = window.innerWidth,
                r = window.innerHeight;
            return cx = t.offsetLeft - parseInt(i[0]), cy = t.offsetTop - parseInt(i[1]), cx = cx < 0 ? 0 : cx, cy = cy < 0 ? 0 : cy, cx = cx + s > o ? o - s : cx, cy = cy + n > r ? r - n : cy, t.style.left = cx + "px", t.style.top = cy + "px", t.style.right = "auto", t.style.bottom = "auto", !(t.style.transition = "unset")
        },
        cacheChatDivPosition: function() {
            var e = S.style;
            "" === e.left || $ZSIQWidgetUI.isHandHeldDevice() || (e.removeProperty("transition"), S.setAttribute("drag", "true"), n("dragpos", '{"left":"' + e.left + '", "top":"' + e.top + '" }', !0))
        },
        isOfflineByEngaged: function() {
            for (var e = $ZSIQWidget.getEmbedObject().einfo.embedstatus.DEPTLIST, t = 0; t < e.length; t++) {
                var i = e[t];
                if (!i.STATUS && i.ENGAGED) return !0
            }
            return !1
        },
        isNewHeader: function() {
            return -1 != [4, 8, 9, 10].indexOf(parseInt($ZSIQWidget.getEmbedObject().theme))
        },
        getStaticFileNodes: function(e, t, i) {
            for (var a = [], s = "js" === t, n = window._IS_DEV, o = 0; o < e.length; o++)
                if (s) {
                    var r = this.getScriptNode();
                    r.src = e[o], i && !n ? r.type = "module" : n || (r.type = "nomodule"), a.push(r)
                } else {
                    var l = document.createElement("link");
                    l.href = e[o], l.rel = "stylesheet", l.type = "text/css", a.push(l)
                }
            return a
        },
        getScriptNode: function() {
            var e = document.createElement("script");
            return e.type = "text/javascript", e
        },
        getRevampWindowVariables: function(e, t) {
            var i, a = e.einfo,
                s = t.commondata,
                n = t.widgetobj,
                o = {
                    AVUID: $ZSIQUtil.getAvuid(),
                    visitorInfo: $zv,
                    ISSIGNATURECHAT: window._IS_SIGNATURE_CHAT,
                    SIQSERVICENAME: window._SIQSERVICENAME,
                    IS_PREVIEW: window._IS_PREVIEW,
                    IS_LIVE_PREVIEW: window._SIQ_WIDGET_LIVE_PREVIEW,
                    IS_RTL: e.isRtlLang,
                    brandid: a.embedid,
                    lsid: a.lsid,
                    sname: e.screenname,
                    soid: e.pinfo.soid,
                    annonid: e.annonid,
                    sURL: e.embedserverurl,
                    schema: e.schema,
                    nonce: $zohosq.nonce,
                    producturl: e.producturl,
                    downloadserver: s.downloadserver,
                    uploadserver: s.uploadserver,
                    siqservicename: s.siqservicename,
                    useUDServer: t.usedownloadserver,
                    UDServerRevamp: s.UDServerRevamp,
                    siqUDServiceName: s.siqUDServiceName,
                    mediafiles: s.mediafilescdnhashes,
                    uapache: e.uapache,
                    mediaserverurl: e.mediaserverurl,
                    domain: $ZSIQChat.getDomain(),
                    wmsInfo: {
                        js_domain: e.wmsjsstaticdomain,
                        prdid: e.lsprdcode,
                        js_url: s.wmsjsstaticserver,
                        domain: e.wmspublicdomain
                    },
                    customcss: (i = JSON.parse(a.props.iscustomcss), {
                        enabled: !!i[0],
                        file_name: i[1].fname || i[1].pfname,
                        fpath: i[1].fpath
                    }),
                    widget_code: $zohosq.widgetcode,
                    language: e.language,
                    rtcurls: window._NEW_MEDIARTC_URLS,
                    zmap: {
                        css_url: n.zmapapicss,
                        api_key: n.zmapapikey,
                        api_url: n.zmapapiurl,
                        static_url: n.zmapstaticurl
                    }
                },
                r = this.getScriptNode();
            return r.textContent = "window._STATIC_URL='" + _STATIC_URL + "';window._CONFVARIABLES=" + JSON.stringify(o) + ";", r
        },
        splitJSHashgetSRIVal: function(e) {
            var t = e.split("/").pop();
            return $ZSIQChat.getSubResourceIntegrityAttr(t.substring(t.indexOf("_") + 1).replace("_.js", "").replace("_.css", "").slice(-64))
        },
        splitFileHashAndGetSRIattr: function(e) {
            if (!(($ZSIQChat.getWidgetData() || {}).embedobj || {}).subresourceintegrity_enabled) return "";
            var t = $ZSIQChatWindow.splitJSHashgetSRIVal(e);
            return t ? ' integrity="' + t + '" crossorigin="anonymous" ' : ""
        },
        getFiles: function() {
            var t = $ZSIQWidget.getEmbedObject(),
                e = $ZSIQChat.getWidgetData(),
                i = $ZSIQWidget.getWidgetObject();
            if (window._IS_REVAMP) {
                var a = [];
                return NEW_STATIC_URLS.forEach(function(e) {
                    e = e.slice(), t.isRtlLang ? e.shift() : e.pop(), a.push(e)
                }), [this.getRevampWindowVariables(t, e, i)].concat(this.getStaticFileNodes(a[0], "js")).concat(this.getStaticFileNodes(a[1], "js", !0)).concat(this.getStaticFileNodes(a[2], "css"))
            }
            var s, n = e.commondata,
                o = "";
            ($ZSIQChat.isPreview() || $ZSIQChat.isSignatureChat()) && (o = "skipdrag");
            var r = n.schema + "://" + t.embedserverurl,
                l = "",
                d = "";
            try {
                window.parent.$ZSIQWidget ? d = "window.parent.$ZSIQUtil.onCDNFailure(this)" : window.opener && opener.$ZSIQWidget && (d = "window.opener.$ZSIQUtil.onCDNFailure(this)")
            } catch (e) {
                d = ""
            }
            i.cssstaticfile = "/styles/embedtheme" + t.theme + ".css", i.jsstaticfile = "/js/siqchatwindow" + t.theme + ".js";
            var c = i.resourcefile,
                I = !1;
            try {
                parent.WixPopUp && (I = !0)
            } catch (e) {}
            if (iscdnenabled && (i.cssstaticfile = "/salesiq/styles/embedtheme" + t.theme + "_" + cssjslist[i.cssstaticfile] + "_.css", i.jsstaticfile = "/salesiq/js/siqchatwindow" + t.theme + "_" + cssjslist[i.jsstaticfile] + "_.js"), $ZSIQChatWindow.isNewHeader()) {
                var g = t.jquery_version_updated;
                i.cssstaticfile = t.isRtlLang ? "/salesiq/styles/embedrtl_LVRLoAJr2ZwIYG4R9Pp3FHfNQ7OfO48vDk733fnr6Fi7BS6IH-63JcuQJNGWusBl_.css" : "/salesiq/styles/newembedtheme_7nMmFo0ESIxWpUGdpIA_Gji1F1wXJfgzxXqzov8GXJfF87FZxcjEP__h96HoqdCb_.css", i.jsstaticfile = g ? "/salesiq/js/siqnewchatwindow1_fVMCA0P7dX38XP_Buk1qlw1RNdenT_IBT0vSrh5hNg7i-iNZTfZ3IPhHpOHYc8mQ_.js" : "/salesiq/js/siqnewchatwindow_uRrNkj5TsUfYe5ZYsXPkdAktEFJqEfhkX339n-uujop6xS-V2HbMnzPXLJEZIeFM_.js"
            }
            if ($ZSIQChat.isPreview() && !I) {
                var m = /(?:settings\/)(?:apps|brands|triggers)/.test(parent.window.location.href) || parent.window.IS_WIDGET_PREVIEW,
                    S = t.ucomp ? n.jscdnstaticserver + "/salesiq/js/chatwindowpreview_7Si6jFwVBwPeyJHB5jO_q_SLpxTYQji8iAlwM7WP5xbvGwYZk4rN-stK4nCko62z_.js" : r + "/js/embed/new/chatwindow/chatwindowpreview.js",
                    h = m ? "" : t.ucomp ? i.csscdnstaticserver + "/salesiq/styles/chatwindowpreview_L1zqJNIQoujZQGzNUGRHf1MPVwUVLxIUIWIppIJhp2u4dHyc1KYAvFJW416_Xcm0_.css" : r + "/styles/embed/new/chatwindow/chatwindowpreview.css";
                l = m ? "" : '<link href="' + h + '" rel="stylesheet" type="text/css" />', l += '<script src="' + S + '"><\/script>'
            }
            if (t.ucomp) {
                var u = $zohosq.nonce ? 'nonce ="' + $zohosq.nonce + '"' : "",
                    p = n.jscdnstaticserver + "/salesiq/js/embedmedia-rtc_ezUmzJFYAO6FaqaREpMPKXtTM-zrEANoOI9RjNueXRNFiLNUckKedCpUSqjehTEE_.js";
                s = '<html><head><link href="' + i.csscdnstaticserver + i.cssstaticfile + '" rel="stylesheet" ' + u + $ZSIQChatWindow.splitFileHashAndGetSRIattr(i.cssstaticfile) + ' type="text/css" onerror="' + d + '" />';
                var f = "",
                    w = e.embedobj.wmslite_js_sri_hash_value;
                w && (f = "integrity=" + w + ' crossorigin="anonymous"'), s += '<script src="' + i.wmsjsstaticserver + '" ' + u + " " + f + '><\/script><script src="' + n.jscdnstaticserver + i.jsstaticfile + '" ' + u + $ZSIQChatWindow.splitFileHashAndGetSRIattr(i.jsstaticfile) + ' ><\/script><script src="' + c + '"  onerror="' + d + '" ' + u + $ZSIQChatWindow.splitFileHashAndGetSRIattr(c) + " ><\/script>" + l + "</head><body></body></html>", t.einfo.embedstatus.staticfiles_delayloading_enabled || (s += '<script src="' + p + '" ' + u + $ZSIQChatWindow.splitFileHashAndGetSRIattr(p) + " ><\/script>")
            } else {
                t.theme, t.theme, t.theme;
                $ZSIQChatWindow.isNewHeader() && ("themeui.js", "themetemplate.js", "theme.css", "themecommon.css"), s = Filedatagetter.getIframeFileData({
                    iframecls: o,
                    preview_files: l
                })
            }
            try {
                var $ = JSON.parse(t.einfo.props.iscustomcss);
                if (1 == $[0] && $[1].fpath) {
                    var v = $[1].fpath;
                    if ("undefined" != typeof $ZSIQChat && $ZSIQChat.getWidgetData().usedownloadserver) {
                        var Q = v.split("/")[1],
                            Z = $ZSIQWidget.getEmbedObject().pinfo.soid,
                            W = $[1].fname ? $[1].fname : $[1].pfname;
                        W = W || "customcss.css";
                        var C = "";
                        if ($ZSIQChat.getWidgetData().commondata.UDServerRevamp) {
                            var y = {
                                "x-siq-soid": Z,
                                "x-siq-module": "brands",
                                "x-siq-type": "apps_custom_css",
                                "x-siq-parentid": $ZSIQChat.getWidgetData().embedobj.einfo.embedid,
                                "x-siq-resourceid": Q,
                                "x-siq-filetype": "text/css",
                                "x-siq-filename": W
                            };
                            C = UDHandler.getUDDownLoadLink(y)
                        } else {
                            var b = {
                                "x-siq-filetype": v.split("/")[0],
                                "x-siq-lsid": Q.split("_")[1],
                                "x-siq-soid": Z,
                                "x-siq-ispreview": !1,
                                "x-siq-pfname": W
                            };
                            C = UDHandler.getDownLoadLink(Q, "default", b)
                        }
                        s += '<link href="' + C + '" rel="stylesheet" type="text/css" />'
                    } else s += '<link href="' + r + "/" + t.screenname + "/" + v + '/stylesheet.ls" rel="stylesheet" type="text/css" />'
                }
            } catch (e) {}
            return s
        },
        drawCustomHTML: function() {
            var e = $ZSIQUtil.getAPIValues().customhtml || $zv.customhtml;
            if (e) {
                var t = document.getElementById(e[0]);
                if (t) {
                    var i = $ZSIQWidget.getWidgetObject(),
                        a = i.status ? "online" : "offline",
                        s = e[1];
                    s[a + ".html"] && (t.innerHTML = s[a + ".html"]), e[2] || ($ZSIQUtil.bindClickEvent(t, function() {
                        $zoho.ld.handle.customClick(a)
                    }, !0), e[2] = !0), i.hideembed && (t.style.display = "none")
                }
            }
        },
        closeImagePreview: function(e, t) {
            if (e.target.getAttribute("zsiqclose") || t) {
                var i = document.getElementById("zsiqimagepreview") || document.getElementById("datepicker_body");
                i && i.parentNode.removeChild(i)
            }
        },
        startChat: function(e) {
            $ZSIQChatWindow.closeImagePreview(e, !0);
            var t = $ZSIQUtil.getIframe(),
                i = t.$Support;
            if (i) {
                var a = e.target,
                    s = a ? a.getAttribute("proptype") : e;
                $ZSIQChat.getWidgetData().embedobj.triggerOnChatnow && i.checkAndHandleTriggerOnRestart("", !0), i.isCallForm = !1, i.Util.showMessageAreaUI(s), t.$("#conv-tab").addClass("sel"), t.$("#faqtab").removeClass("sel")
            }
        },
        updateVote: function(e, t) {
            var i = document.getElementById("zsiqfaqpreview");
            if (i) {
                var a = i.getAttribute("articleid");
                $ZSIQUtil.storeCookieVal("Article_" + a, !0, !1)
            }
            $ZSIQUtil.getIframe().$FAQ && $ZSIQUtil.getIframe().$FAQ.updateVote(e, t)
        },
        toggleTocChildView: function(e) {
            var t = e.parentElement && e.parentElement.parentElement;
            t && t.classList && t.classList.toggle && t.classList.toggle("zsiq-arrow-open");
            for (var i = t && t.querySelectorAll('[data-id="tocchild"]'), a = i && i.length, s = 0; s < a; s++) {
                var n = i[s];
                n && n.classList && n.classList.toggle && n.classList.toggle("zsiq-hide")
            }
        },
        toggleTocContainer: function() {
            var e = document.getElementById("zsiqimagepreview");
            (e = e && e.querySelector('[data-id="toccontainer"]')) && e.classList && e.classList.toggle && e.classList.toggle("zsiq-toc-open")
        },
        articleScrollToView: function(e) {
            var t = e.getAttribute("data-id"),
                i = document.getElementById("zsiqimagepreview");
            (i = i && i.querySelector('[id="' + t + '"]')) && i.scrollIntoView && i.scrollIntoView()
        },
        isChatExist: function() {
            try {
                var e = $ZSIQUtil.getIframe().$Support;
                if (e && (e.getTriggerCookie() || e.isChatExist())) return !0
            } catch (e) {}
            return !1
        },
        clearIframeLoader: function() {
            clearTimeout(h)
        },
        getIframeLoader: function() {
            return h
        },
        setLoadContentClass: function() {
            try {
                var e = $ZSIQUtil.getIframe().$Support,
                    t = e.container[0].parentNode; - 1 != t.className.indexOf("loadframe") || !$ZSIQChat.isPreview() && -1 == S.className.indexOf("siqanim") || (t.className += " loadframe", e.handlePostLoadScript(), e.enableHeaderImage())
            } catch (e) {}
        },
        isOnlyCall: function() {
            return $ZSIQChat.getWidgetData().isonlycall
        },
        isCallPlusChat: function() {
            var e = $ZSIQChat.getWidgetData().components;
            return -1 != e.indexOf("chat") && -1 != e.indexOf("call")
        },
        getIconClass: function() {
            return (this.isOnlyCall() ? "siqico-call" : "siqico-chat") + (window._SIQ_NEW_FLOAT ? "-stroke" : "")
        },
        getButtonText: function() {
            var e = $ZSIQWidget.getWidgetObject().i18nkeys;
            return $ZSIQWidget.getEmbedObject().pinfo.only_call_enabled ? this.isCallPlusChat() ? e["sticker.connect.text"] : this.isOnlyCall() ? e["av.info.callnow"] : e["float.chat.text"] : e["float.chat.text"]
        },
        getWidgetStatus: function() {
            var e = $ZSIQWidget.getWidgetObject();
            return this.isOnlyCall() ? e.call_status : e.call_status || e.status
        },
        getEmbedStatus: function() {
            var e = $ZSIQWidget.getWidgetObject(),
                t = $ZSIQChat.getWidgetData(),
                i = -1 != t.embedobj.homepage_configs.conversation_mode.indexOf("call");
            return this.isOnlyCall() || i ? e.call_status || e.status : t.widgetobj.status
        },
        expandChatWindowDimension: function(e) {
            S.classList[e ? "add" : "remove"]("siqcw-exp-window")
        }
    }
}();

function zsiqdrag(e) {
    var o = 0,
        r = 0,
        l = this,
        d = !1;

    function c(e) {
        var t = getComputedStyle(l),
            i = parseInt(t.getPropertyValue("left")) || 0,
            a = parseInt(t.getPropertyValue("top")) || 0;
        if (i < 0 || a < 0) return i < 0 && (l.style.left = "0px"), a < 0 && (l.style.top = "0px"), d = !1, void window.removeEventListener("mousemove", c);
        var s = parseInt(t.getPropertyValue("right")) || 0,
            n = parseInt(t.getPropertyValue("bottom")) || 0;
        if (s < 0 || n < 0) return s < 0 && (l.style.left = i + s + "px"), n < 0 && (l.style.top = a + n + "px"), d = !1, void window.removeEventListener("mousemove", c);
        l.style.left = e.pageX - o + "px", l.style.top = e.pageY - r + "px"
    }
    this.addEventListener("mousedown", function(e) {
        d = !0;
        var t = getComputedStyle(l),
            i = parseInt(t.getPropertyValue("left")) || 0,
            a = parseInt(t.getPropertyValue("top")) || 0;
        o = e.pageX - i, r = e.pageY - a, window.addEventListener("mousemove", c)
    }), this.addEventListener("mouseup", function(e) {
        !0 === d && (d = !1, window.removeEventListener("mousemove", c))
    })
}
Element.prototype.zsiqdrag = zsiqdrag;
var $ZSIQTemplate = {
    getFontFamily: function() {
        return ' style="font-family:inherit"'
    },
    getGravatar: function(t) {
        return t.gravatar[0] == $ZSIQUtil.STATUS_ENABLE && t.gravatar[1] && t.gravatar[1].fpath ? $ZSIQUtil.getImageURL(t, t.gravatar[1]) : ""
    },
    lightenDarkenColor: function(t, e) {
        var r = parseInt(t.slice(1), 16),
            a = Math.round(2.55 * e),
            n = (r >> 16) + a,
            o = (r >> 8 & 255) + a,
            i = (255 & r) + a;
        return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (o < 255 ? o < 1 ? 0 : o : 255) + (i < 255 ? i < 1 ? 0 : i : 255)).toString(16).slice(1)
    },
    getCustomColor: function(t) {
        var e = window._SIQ_NEW_FLOAT ? JSON.parse($ZSIQWidget.getEmbedObject().einfo.props.color)[1].code : $ZSIQWidget.getWidgetObject().color[1].code;
        return $zv.embedtheme || e || "#0066cc"
    }
};
$ZSIQTemplate.theme1 = {
    getFloatStickerHTML: function(i) {
        var s = $ZSIQTemplate.getGravatar(i),
            e = !0 === i.status ? "" : "zsiq_off",
            t = i.i18nkeys && i.i18nkeys["gravatar.alt.text"] || "",
            a = $ZSIQChat.isSeasonalTheme(),
            l = (($ZSIQWidget.getEmbedObject() || {}).pinfo || {}).hide_float_tooltip ? "mobile_view" : "";
        a && ($ZSIQWidgetUI.addClass($ZSIQWidgetUI.getWidgetDiv(), "zsiq_seasonal"), $ZSIQWidgetUI.getWidgetDiv().setAttribute("seasonal-type", $ZSIQChat.getSeasonalThemeObj().type));
        var o = "show" === $zohosq.values.closeicon ? '<em class="siqico-close siq-hide-bubble" id="hide-widget"></em>' : "",
            n = $ZSIQLSDB.getFromLocalStorage("isTooltipClosed") ? "hide_tooltip" : "";
        return '<div id="zsiq_float" class="zsiq_float ' + e + l + '"' + $ZSIQTemplate.getFontFamily() + '><div class="zsiq_flt_rel"><em id="zsiq_agtpic" class="zsiq_user ' + (s ? "" : "siqicon " + $ZSIQChatWindow.getIconClass()) + '">' + (s ? '<img src="' + s + '" alt="' + t + '" />' : "") + "</em>" + (a ? '<span id="zsiq-seasonal-img" class="seasonal-float-img"></span>' : "") + '<div id="titlediv" class="zsiq_cnt ' + n + '"><div id="zsiq_maintitle" class="zsiq_ellips" title="{MAINTITLE}">{MAINTITLE}</div><p id="zsiq_byline" class="zsiq_ellips" title="{BYLINETEXT}">{BYLINETEXT}</p><em class="siqico-close"></em></div><em id="zsiq_unreadcnt" class="zsiq_unrdcnt" style="display: none;"></em><em id="zsiq_avcall" class="zsiqmin_unrdcnt zsiq_unrdcnt siqico-mincall" style="display: none;"></em></div>' + o + "</div>"
    },
    getCustomCSS: function(i) {
        var s = $ZSIQTemplate.getCustomColor(i);
        return ".zsiq_flt_rel{ background-color:" + s + " !important;} .zsiq_seasonal .st2 { fill: " + s + " !important;}"
    }
};
var $ZSIQWidgetUI = $ZSIQWidgetUI || function() {
    var I, t, g, l, c, u = {
            1: "siq_bR",
            2: "siq_bM",
            3: "siq_bL",
            4: "siq_bL",
            5: "siq_lM",
            6: "siq_tL",
            7: "siq_tL",
            8: "siq_tM",
            9: "siq_tR",
            10: "siq_tR",
            11: "siq_rM",
            12: "siq_bR"
        },
        i = {
            bottomright: "1",
            bottomleft: "3",
            topleft: "6",
            topright: "9",
            left: "5",
            right: "11"
        },
        m = ["1", "2", "3", "4", "5", "6", "7", "9", "10"],
        n = function(e) {
            var t = $ZSIQUtil.getAPIValues(),
                i = $ZSIQWidget.getWidgetObject(),
                n = $ZSIQChatWindow[window._SIQ_TITLE_NEW_FLOW ? "getEmbedStatus" : "getWidgetStatus"](),
                a = !0 === n ? "online" : "offline",
                s = ("maintitle" == e ? i.title[1][a] : i.title[1][a + "_byline"]) || i.i18nkeys["float." + a + "." + e],
                l = "maintitle" == e ? 0 : 1,
                o = t.buttontexts;
            return o && (n && o[0] ? s = o[0][l] || s : !n && o[1] && (s = o[1][l] || s)), $ZSIQUtil.getEncodedText(s)
        },
        S = function(e) {
            return e = (e = e.replace(/{MAINTITLE}/g, n("maintitle"))).replace(/{BYLINETEXT}/g, n("byline"))
        },
        f = function(e) {
            return e.sticker[0] == $ZSIQUtil.STATUS_ENABLE ? "zsiq_floatmain zsiq_theme" + e.sticker[1].default+" " : "zsiq_custommain "
        },
        h = function(e) {
            var t;
            if (e.status = (t = $ZSIQWidget.getWidgetObject()).call_status || t.status, e.sticker[0] != $ZSIQUtil.STATUS_DISABLE) return g.style.height = "", g.style.width = "", I = $ZSIQTemplate["theme" + e.sticker[1].default], e.clogo_src = $ZSIQUtil.getCompanyLogo(e.clogo_src), I.getFloatStickerHTML(e);
            var i = e.status ? "online" : "offline";
            return e.sticker[1] && e.sticker[1].online ? a(e, i) : '<div id="zsiq_float" class="zsiq_float zsiq_empty"><div class="zsiq_flt_rel"></div></div>'
        },
        a = function(e, t) {
            var i = "",
                n = "",
                a = e.i18nkeys && e.i18nkeys["customsticker.alt.text"] || "";
            "offline" == t && $ZSIQUtil.isEmpty(e.sticker[1][t]) ? (i = e.sticker[1].online, n = "grayscl") : i = e.sticker[1][t];
            var s = '<div id="zsiq_float"><img onload="$ZSIQWidgetUI.onLoadCustomSticker(this)" src="' + $ZSIQUtil.getImageURL(e, i) + '" class="' + n + '" alt="' + a + '" height="400" width="400"/><em id="zsiq_unreadcnt" class="zsiq_unrdcnt" style="display: none;"></em><em id="zsiq_avcall" class="zsiqmin_unrdcnt zsiq_unrdcnt siqico-mincall" style="display: none;"></em></div>';
            return g.style.display = "none", s
        },
        s = function(e) {
            if ($ZSIQChat.isSeasonalTheme()) {
                var t = document.getElementById("zsiq-seasonal-img");
                if (!t) return;
                t.classList[e ? "add" : "remove"]("zsiq-fade")
            }
        };
    return {
        F_STICKER: "0",
        F_BUTTON: "1",
        F_WINDOW: "2",
        getWidgetDiv: function() {
            return g
        },
        getWidgetState: function() {
            return l
        },
        initWidgetState: function() {
            t = $ZSIQUtil.isCSSTransformSupport();
            var e = $ZSIQUtil.getCookieValue("state");
            $ZSIQWidgetUI.F_WINDOW == e && "hide" == $zohosq.values.floatwindowvisible && ($ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_BUTTON), e = $ZSIQWidgetUI.F_BUTTON), l = e || $ZSIQWidgetUI.F_STICKER
        },
        isCSSTransformSupported: function() {
            return t
        },
        drawWidget: function() {
            var e = $ZSIQWidget.getWidgetObject(),
                t = $ZSIQWidget.getEmbedObject(),
                i = u[$ZSIQWidgetUI.getWidgetPosition()],
                n = !!g,
                a = $zohosq.nonce;
            if (n || (g = document.createElement("DIV")), g.className = f(e) + i, g.innerHTML = S(h(e)), g.setAttribute && (g.setAttribute("data-id", "zsalesiq"), a && g.setAttribute("nonce", a)), n || (g.style.visibility = "hidden", document.body.appendChild(g)), !$ZSIQChat.isPreview()) {
                var s = t.pinfo.pinfo,
                    l = document.getElementById("gdprbanner");
                if (null != l && l.remove(), 1 == JSON.parse(s.isgdprenabled) && 0 != JSON.parse(s.trackingprivacyconfig) && 1 == e.isgdprenabled && !$ZSIQUtil.checkGDPRBannerStatus(0, null, t)) {
                    (c = document.createElement("DIV")).innerHTML = $ZSIQUtil.getGDPRBanner(e, s), c.className = "gdbr-banner-cont";
                    var o = c.querySelector("#gdprbannerurl");
                    if (o) {
                        var d = -1 == s.cookiepolicyurl.indexOf("http") ? "http://" + s.cookiepolicyurl : s.cookiepolicyurl;
                        a && o.setAttribute("nonce", a), o.setAttribute("href", d)
                    }
                    document.body.appendChild(c), $ZSIQUtil.bindEventsCookieBanner()
                }
            }
            if (e.onlysticker) try {
                var r = $ZSIQWidgetUI.getMinWidgetDiv();
                $ZSIQWidgetUI.addClass(r, "zsiqfanim")
            } catch (e) {
                $ZSIQWidgetUI.addClass($ZSIQWidgetUI.getWidgetDiv(), "zsiqfanim")
            } else $ZSIQWidgetUI.checkWidgetVisibility(), $ZSIQWidgetUI.bindCustomCSS(e), $ZSIQUtil.bindClickEvent(g, $ZSIQWidgetUI.handleFloatEvents), n || $ZSIQUtil.bindClickEvent(document, $ZSIQUtil.stopBlinking), $ZSIQChatWindow.constructIframe(), $ZSIQWidget.handleAPIValues(), $ZSIQChatWindow.drawCustomHTML(), $ZSIQUtil.bindFocusEvent(window, $ZSIQWidgetUI.updateCountUI), $ZSIQUtil.bindResizeEvent($ZSIQWidgetUI.handleResizeEvents), t.is_widget_drag_supported && !$ZSIQChat.isPreview() && $ZSIQWidgetUI.bindDragEvent(), $ZSIQWidgetUI.updateCountUI()
        },
        minimizeSticker: function(e, t) {
            if (!$ZSIQChat.isPreview()) {
                var i = $ZSIQWidget.getWidgetObject();
                try {
                    var n = $ZSIQUtil.getIframe().$Support.EmbedObj,
                        a = $ZSIQUtil.getIframe().$Support.getCookieValue("ZLD" + n.livelsid)["attname_" + n.visitorID];
                    if ($ZSIQUtil.getIframe().$Support.getTriggerCookie()) {
                        var s = $ZSIQUtil.getIframe().$Support.getTriggerCookie();
                        s && (a = s.sendername)
                    }
                } catch (e) {}
                var l = i.sticker[1].default;
                if (i.sticker[0] != $ZSIQUtil.STATUS_DISABLE && (o = l, -1 < m.indexOf("" + o))) {
                    var o;
                    if ("1" == l) {
                        var d = document.getElementById("titlediv");
                        if (a && $ZSIQUtil.containsClass(d, "zsiq_min")) return void(document.getElementById("zsiq_maintitle").innerText = a);
                        d.className = d.className + " zsiq_min"
                    } else {
                        var r = document.getElementById("zsiq_float");
                        if (a && $ZSIQUtil.containsClass(r, "zsiq_min")) return void(document.getElementById("zsiq_maintitle").innerText = a);
                        g.innerHTML = S(I.getFloatButtonHTML($ZSIQWidget.getWidgetObject())), g.className = f(i) + u[$ZSIQWidgetUI.getWidgetPosition()], $ZSIQUtil.bindClickEvent(g, $ZSIQChatWindow.openChatWindow), e && $ZSIQWidgetUI.addClass(g, "zsiqfanim"),
                            function() {
                                var e = $ZSIQWidgetUI.getWidgetPosition();
                                if (5 == e || 11 == e) {
                                    var t = document.getElementById("zsiq_float"),
                                        i = -(t.offsetWidth - t.offsetHeight) / 2 + "px";
                                    $ZSIQWidgetUI.addClass(g, "zsiq_rotate90"), 5 != e ? g.style.right = i : g.style.left = i
                                }
                            }()
                    }
                    var c = document.getElementById("zsiq_float");
                    c && (c.parentElement.style.height = $ZSIQUtil.getElementHeight(c) + "px", c.parentElement.className += " siq_noanim"), t || $ZSIQWidgetUI.setWidgetState($ZSIQWidgetUI.F_BUTTON), $ZSIQWidgetUI.updateCountUI()
                }
            }
        },
        isStickerMinimized: function() {
            if ("1" != $ZSIQWidget.getWidgetObject().sticker[1].default) return $ZSIQUtil.containsClass(document.getElementById("zsiq_float"), "zsiq_min");
            var e = document.getElementById("titlediv");
            return $ZSIQUtil.containsClass(e, "zsiq_min")
        },
        handleWidgetVisible: function(e, t) {
            try {
                if (e)
                    if ("hide" != e || t && -1 != t) {
                        if ("show" == e) {
                            var i = $ZSIQChatWindow.getChatWindowDiv();
                            (!i || "block" !== i.style.display || i.style.top.replace("px", "") < 0 || -1 == i.className.indexOf("siqanim")) && (g.style.display = "block", g.className = g.className.replace(/(?:^|\s)zsiqfanim(?!\S)/, ""))
                        } else if (!isNaN(e) && 0 < e) {
                            if (-1 == e) return;
                            g.style.display = "none", setTimeout(function() {
                                g.style.display = "block"
                            }, 1e3 * e), $zohosq.values.floatvisible = -1
                        }
                    } else g.style.display = "none"
            } catch (e) {}
        },
        updateCallUI: function(e) {
            document.getElementById("zsiq_avcall") && (document.getElementById("zsiq_avcall").style.display = ""), s(!0)
        },
        removeCallUI: function(e) {
            document.getElementById("zsiq_avcall") && (document.getElementById("zsiq_avcall").style.display = "none"), s(!1)
        },
        updateIncomingCallUI: function() {
            document.getElementById("zsiq_avcall") && (document.getElementById("zsiq_avcall").className += " cal-anim")
        },
        handleMinimizeCall: function() {
            this.removeCallClass(), $ZSIQChatWindow.getChatWindowDiv().className += "theme5" === $ZSIQUtil.getIframe().CallImpl.getTheme() ? " siq-calthemesign" : " siq-calthememin"
        },
        handleMinCall: function() {
            this.removeCallClass(), $ZSIQChatWindow.getChatWindowDiv().className += "theme5" === $ZSIQUtil.getIframe().CallImpl.getTheme() ? " siq-calthemesign" : " siq-caltheme"
        },
        handlefbCall: function() {
            this.removeCallClass(), $ZSIQChatWindow.getChatWindowDiv().className += "theme5" === $ZSIQUtil.getIframe().CallImpl.getTheme() ? " siq-calthemesign" : " siq-calthemefb"
        },
        removeCallClass: function() {
            var e = $ZSIQChatWindow.getChatWindowDiv();
            e.className = e.className.replace(/(?:^|\s)siq-calthememin(?!\S)/, "").replace(/(?:^|\s)siq-caltheme(?!\S)/, "").replace(/(?:^|\s)siq-calthemefb(?!\S)/, "")
        },
        removeIncomingCallUI: function() {
            document.getElementById("zsiq_avcall") && document.querySelector("#zsiq_avcall").classList.remove("cal-anim")
        },
        updateCount: function(e) {
            var t = $ZSIQWidget.getWidgetObject().sticker;
            1 == t[0] && "8" == t[1].default && (document.getElementById("zsiq_chatbtn").style.display = "none"), document.getElementById("zsiq_unreadcnt") && e && (document.getElementById("zsiq_unreadcnt").style.display = "", $ZSIQUtil.setText("zsiq_unreadcnt", e), s(!0))
        },
        updateCountUI: function() {
            var e, t = $ZSIQUtil.getIframe(),
                i = 0;
            if (t && t.$Support) i = (e = t.$Support).getUnreadCount(), e.setTabOwner();
            else {
                var n = $ZSIQChat.getWidgetData().embedobj.einfo.embedid,
                    a = $ZSIQLSDB.get("ZLD" + n + "unreadcount") || {};
                for (var s in a) i += a[s]
            }
            i ? l == $ZSIQWidgetUI.F_BUTTON ? $ZSIQWidgetUI.updateCount(i) : e && l == $ZSIQWidgetUI.F_WINDOW && !e.isConversationUIFocussed() && ($ZSIQWidgetUI.removeUnreadCount(), e.removeUnreadCookie && e.removeUnreadCookie()) : $ZSIQWidgetUI.removeUnreadCount()
        },
        handleFloatEvents: function(e) {
            var t = e.target;
            if ("siqico-close" == t.getAttribute("class")) return $zoho.salesiq.floatbutton.coin.hidetooltip(), void $ZSIQLSDB.storeInLocalStorage("isTooltipClosed", !0);
            if ("hide-widget" == t.getAttribute("id")) return e.stopPropagation(), void $zoho.salesiq.floatbutton.visible("hide");
            if ("minsticker" != e.target.getAttribute("data-click")) {
                var i = $ZSIQUtil.getIframe();
                if (i) {
                    if (!$ZSIQChat.isPreview() && i.$Support) {
                        var n = "block" == g.style.display && !$ZSIQUtil.containsClass(g, "zsiqfanim");
                        if (l == $ZSIQWidgetUI.F_BUTTON || l == $ZSIQWidgetUI.F_STICKER || n) {
                            var a = i.$Support.Util;
                            a.ispostloaddone || (clearTimeout(a.jsdownloadtimer), a.downloadAdditionalFiles()), $ZSIQWidget.handleCallBacks({
                                "chatbutton.click": ""
                            }), $ZSIQChatWindow.openChatWindow(), window._IS_REVAMP && ("click" == $zv.chatmode ? IframeHandler.sendPostMessage("chatmode") : $zv.question && IframeHandler.sendPostMessage("question"))
                        }
                    }
                } else $ZSIQChatWindow.populateIframe(null, function() {
                    $ZSIQWidgetUI.handleFloatEvents(e)
                })
            } else $ZSIQWidgetUI.minimizeSticker()
        },
        handleResizeEvents: function() {
            $ZSIQChat.isPreview() || handleIframeFunction(function(e) {
                e.$Support.Util.checkWindowVisibility()
            })
        },
        onLoadCustomSticker: function(e) {
            var t = {},
                i = e.naturalWidth,
                n = e.naturalHeight,
                a = [400 / i, 400 / n];
            t = 1 < (a = Math.min(a[0], a[1])) ? {
                WIDTH: i,
                HEIGHT: n
            } : {
                WIDTH: i * a,
                HEIGHT: n * a
            }, g.style.width = t.WIDTH + "px", g.style.height = t.HEIGHT + "px"
        },
        getWidgetPosition: function() {
            var e = $ZSIQUtil.getAPIValues();
            return e.floatposition ? "" + i[e.floatposition] : "" + $ZSIQWidget.getWidgetObject().position[1].no
        },
        isHandHeldDevice: function() {
            return !(!$ZSIQChat.isPreview() || "mobile" != _WIDGETPREV_MODE) || !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        isAppleDevice: function() {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent)
        },
        addClass: function(e, t) {
            -1 == e.className.indexOf(t) && (e.className += " " + t)
        },
        setWidgetState: function(e) {
            l = e, $ZSIQWidget.setWidgetCookie(e)
        },
        removeUnreadCount: function() {
            var e = document.getElementById("zsiq_unreadcnt");
            e && (e.style.display = "none", s(!1))
        },
        checkWidgetVisibility: function(e) {
            var t = $ZSIQWidget.getWidgetObject();
            $ZSIQWidgetUI.checkAndHideCoinToolTip(t.hide_tooltip);
            var i = $zohosq.values.floatvisible;
            if (!i || $ZSIQChat.isPreview() || "hide" != i && "show" != i && isNaN(i))
                if ("1" == t.mdevice_hide[0] && $ZSIQWidgetUI.isHandHeldDevice()) g.style.display = "none";
                else {
                    if ("1" == t.hideoffline[0] && !$ZSIQChatWindow.getWidgetStatus() || 0 == t.islivechat && !$ZSIQChatWindow.isOnlyCall() || t.hideembed) {
                        if (!e && !$ZSIQChatWindow.isChatExist()) return $ZSIQWidgetUI.setWidgetState("0"), void(g.style.display = "none");
                        g.style.display = "block"
                    } else g.style.display = "block";
                    l == $ZSIQWidgetUI.F_WINDOW ? ($ZSIQWidgetUI.minimizeSticker(null, !0), $ZSIQWidgetUI.addClass(g, "zsiqfanim")) : l == $ZSIQWidgetUI.F_BUTTON && $ZSIQWidgetUI.minimizeSticker()
                }
            else $ZSIQWidgetUI.handleWidgetVisible(i)
        },
        bindCustomCSS: function(e) {
            var t = e.sticker[1].default,
                i = $ZSIQTemplate["theme" + t],
                n = document.getElementById("zsiqcustomcss"),
                a = $zohosq.nonce;
            n && n.parentElement.removeChild(n);
            var s = document.createElement("style");
            s.id = "zsiqcustomcss", s.setAttribute && s.setAttribute("data-id", "zsalesiq"), a && s.setAttribute("nonce", a), s.appendChild(document.createTextNode(i.getCustomCSS(e))), document.body.appendChild(s)
        },
        getGDPRBannerDiv: function() {
            return c
        },
        checkAndHideCoinToolTip: function(e) {
            if (1 == $ZSIQWidget.getWidgetObject().sticker[1].default) {
                var t = document.querySelector("#zsiq_float #titlediv"),
                    i = "zsiqhide_tip";
                t && ($zohosq.values.ishidetooltip || e ? $ZSIQWidgetUI.addClass(t, i) : t.classList.remove(i))
            }
        },
        bindDragEvent: function() {
            var o, d, r = g,
                e = r.querySelector("img"),
                c = !1;

            function t(e) {
                var t, i;
                e.preventDefault(), "touchmove" === e.type ? (t = e.touches[0].clientX - o, i = e.touches[0].clientY - d, c = !0) : (t = e.clientX - o, i = e.clientY - d);
                var n = window.innerWidth - r.offsetWidth,
                    a = window.innerHeight - r.offsetHeight,
                    s = Math.min(n, Math.max(0, t)),
                    l = Math.min(a, Math.max(0, i));
                r.style.left = Math.max(t, s) + "px", r.style.top = l + "px"
            }
            r.setAttribute("draggable", !0), e && e.setAttribute("draggable", !1), r.addEventListener("dragstart", function(e) {
                e.dataTransfer.setDragImage(document.createElement("div"), 0, 0);
                var t = r.getBoundingClientRect();
                o = e.clientX - t.left, d = e.clientY - t.top
            }), document.addEventListener("dragover", t), r.addEventListener("touchmove", t), r.addEventListener("touchstart", function(e) {
                e.preventDefault(), c = !1;
                var t = r.getBoundingClientRect();
                o = e.touches[0].clientX - t.left, d = e.touches[0].clientY - t.top, setTimeout(function() {
                    !c && r.click()
                }, 200)
            }), r.addEventListener("touchend", function() {
                c = !1
            })
        }
    }
}();
var $ZSIQWidget = $ZSIQWidget || function() {
    var e, i = {},
        n = {},
        a = function(t) {
            var e = $ZSIQUtil.parseToJSON(t);
            return "object" == typeof e || "boolean" == typeof e ? e : t
        };
    return {
        init: function(t) {
            var e = $ZSIQChat.getWidgetData();
            ! function(t) {
                for (var e in t) i[e] = a(t[e]);
                $ZSIQAnalytics = i.analytics, $ZSIQAutopick = $zv.autopick || i.autopick, _ZSIQ.brandname = i.brandname
            }(e.widgetobj),
            function(t) {
                for (var e in t) n[e] = a(t[e])
            }(e.embedobj), $ZSIQChat.server_avuid = $ZSIQUtil.getAvuid(), $ZSIQWidgetUI.initWidgetState(), $ZSIQWidgetUI.drawWidget(), !$ZSIQChat.isPreview() && $zohosq.init && $zohosq.init(), t || $ZSIQUtil.storeDetails(e), $ZSIQUtil.manageCookie && $ZSIQUtil.setTrackingStatus()
        },
        getWidgetObject: function() {
            return i
        },
        getEmbedObject: function() {
            return n
        },
        setWidgetCookie: function(t) {
            clearTimeout(e), $ZSIQUtil.storeCookieVal("state", t, !0), e = setTimeout(function() {
                $ZSIQWidget.setWidgetCookie(t)
            }, 18e4)
        },
        handleAPIValues: function() {
            if ("click" == $ZSIQUtil.getAPIValues().chatmode) {
                var t = $ZSIQWidgetUI.getWidgetDiv();
                t.setAttribute("data-autochat", !0);
                $ZSIQWidgetUI.getWidgetState() == $ZSIQWidgetUI.F_STICKER && $ZSIQUtil.bindClickEvent(t, function(t) {
                    "zsiq_minimize" != t.target.id && 0 != +[t.clientX] && $ZSIQChatWindow.openChatWindow()
                })
            }
        },
        handleCallBacks: function(t) {
            try {
                if ($zoho && t)
                    for (var e in t) $zohosq._invoke(e, t[e])
            } catch (t) {}
        },
        getWidgetStatus: function() {
            return i.status
        },
        getEmbedSize: function() {
            var t = JSON.parse($ZSIQWidget.getEmbedObject().einfo.props.size)[1].val;
            return 1 == t ? 2 : t
        }
    }
}();
$ZSIQWidget.init();