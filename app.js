const DOWNLOAD_LATEST = "https://github.com/Lineage-Script/Lineage2-RB-Monitor-BohPts/releases/latest/download/YuraRBMonitor_Client_latest.zip";

const translations = {
  uk: {
    navFeatures:"РњРѕР¶Р»РёРІРѕСЃС‚С–", navSetup:"РќР°Р»Р°С€С‚СѓРІР°РЅРЅСЏ", navMap:"РљР°СЂС‚Р° Р Р‘", navFaq:"FAQ",
    previewBadge:"Yura RB Monitor вЂў Lineage 2 High Five вЂў BohPts x500",
    heroTitle:"РљР°СЂС‚Р° Р Р‘ Р›2 С‚Р° С‚Р°Р№РјРµСЂ СЂРµР№Рґ-Р±РѕСЃС–РІ<br><span>Р±РµР· СЂСѓС‡РЅРёС… СЃРµРєСѓРЅРґРѕРјС–СЂС–РІ</span>",
    heroLead:"Yura RB Monitor вЂ” РєР°СЂС‚Р° Р Р‘ Р›2 С– raid boss timer РґР»СЏ Lineage 2 High Five С‚Р° BohPts x500. OBS/OCR Р·С‡РёС‚СѓС” СЃРёСЃС‚РµРјРЅРёР№ С‡Р°С‚, Р·Р°РїСѓСЃРєР°С” С‚Р°Р№РјРµСЂРё СЂРµСЃРїСѓ, РїРѕРєР°Р·СѓС” overlay РїРѕРІРµСЂС… РіСЂРё С‚Р° СЃРёРЅС…СЂРѕРЅС–Р·СѓС” Р°РєС‚РёРІРЅРёС… СЂРµР№Рґ-Р±РѕСЃС–РІ РЅР° РѕРЅР»Р°Р№РЅ-РєР°СЂС‚С–.",
    heroPrimary:"РџРѕРґРёРІРёС‚РёСЃСЏ, СЏРє РїСЂР°С†СЋС”", download:"Р—Р°РІР°РЅС‚Р°Р¶РёС‚Рё",
    metricBosses:"СЂРµР№Рґ-Р±РѕСЃС–РІ", metricLanguages:"РјРѕРІРё С–РЅС‚РµСЂС„РµР№СЃСѓ", metricMap:"СЃРёРЅС…СЂРѕРЅС–Р·Р°С†С–СЏ РєР°СЂС‚Рё",
    liveInterface:"Р–РёРІРёР№ С–РЅС‚РµСЂС„РµР№СЃ Р»Р°СѓРЅС‡РµСЂР°", ocrStatus:"С‡Р°С‚ СЂРѕР·РїС–Р·РЅР°РЅРѕ", mapStatus:"С‚Р°Р№РјРµСЂРё СЃРёРЅС…СЂРѕРЅС–Р·РѕРІР°РЅРѕ", overlayStatus:"РїРѕРІРµСЂС… РіСЂРё",
    whyKicker:"Lineage 2 High Five", whyTitle:"РљР°СЂС‚Р° Р Р‘, С‚Р°Р№РјРµСЂ СЂРµСЃРїСѓ С‚Р° overlay<br><span>РІ РѕРґРЅРѕРјСѓ С–РЅС‚РµСЂС„РµР№СЃС–</span>",
    whyLead:"Р—Р°РјС–СЃС‚СЊ СЂСѓС‡РЅРёС… СЃРµРєСѓРЅРґРѕРјС–СЂС–РІ С– СЃРєСЂС–РЅС–РІ Сѓ С‡Р°С‚С– вЂ” Р°РІС‚РѕРјР°С‚РёС‡РЅРµ OCR-СЂРѕР·РїС–Р·РЅР°РІР°РЅРЅСЏ, raid boss timer С‚Р° Р¶РёРІР° РєР°СЂС‚Р° Р Р‘ РґР»СЏ С„Р°СЂРјСѓ РЅР° High Five, Р· РєРѕРЅС„С–РіСѓСЂР°С†С–С”СЋ РїС–Рґ BohPts x500.",
    featureOcrTitle:"OCR СЃРёСЃС‚РµРјРЅРѕРіРѕ С‡Р°С‚Сѓ", featureOcrText:"РЎРєСЂРёРїС‚ Р·РЅР°С…РѕРґРёС‚СЊ Сѓ С‡Р°С‚С– Lineage 2 РїРѕРІС–РґРѕРјР»РµРЅРЅСЏ РїСЂРѕ РїРѕСЏРІСѓ Р°Р±Рѕ СЃРјРµСЂС‚СЊ Р Р‘ С‚Р° Р·Р°РїСѓСЃРєР°С” РІС–РґРїРѕРІС–РґРЅРёР№ С‚Р°Р№РјРµСЂ СЂРµСЃРїСѓ.",
    featureOverlayTitle:"Р†РіСЂРѕРІРёР№ overlay", featureOverlayText:"РўР°Р№РјРµСЂРё СЂРµР№Рґ-Р±РѕСЃС–РІ Р·Р°РІР¶РґРё РІРёРґРЅРѕ РїРѕРІРµСЂС… РєР»С–С”РЅС‚Р°. РљРѕР»С–СЂ, РјР°СЃС€С‚Р°Р±, РїРѕР·РёС†С–СЏ С‚Р° СЂРѕР·РјС–СЂ РЅР°Р»Р°С€С‚РѕРІСѓСЋС‚СЊСЃСЏ.",
    featureMapTitle:"РћРЅР»Р°Р№РЅ-РєР°СЂС‚Р° Р Р‘ Р›2", featureMapText:"Lineage 2 High Five map РїРѕРєР°Р·СѓС” Р°РєС‚РёРІРЅС– С‚Р°Р№РјРµСЂРё, РЅР°Р·РІРё Р±РѕСЃС–РІ, РєРѕРѕСЂРґРёРЅР°С‚Рё, Р¶РёРІРёР№ СЃС‚Р°С‚СѓСЃ С– РІС–РєРЅРѕ СЂРµСЃРїСѓ.",
    featureEpicTitle:"Р•РїС–Рє С‚Р° СЃРїРµС†С–Р°Р»СЊРЅС– РїРѕРґС–С—", featureEpicText:"РћРєСЂРµРјС– РїРѕРІС–РґРѕРјР»РµРЅРЅСЏ Р№ СЃС†РµРЅР°СЂС–С— РґР»СЏ РµРїС–Рє-Р±РѕСЃС–РІ, Lilith/Anakim С‚Р° С–РЅС€РёС… РїРѕРґС–Р№ СЃРµСЂРІРµСЂР°.",
    workflowKicker:"РЁРІРёРґРєРµ РЅР°Р»Р°С€С‚СѓРІР°РЅРЅСЏ", workflowTitle:"РџРѕРєР°Р¶Рё СЃРєСЂРёРїС‚Сѓ С‡Р°С‚ вЂ”<br><span>СЂРµС€С‚Сѓ РІС–РЅ Р·СЂРѕР±РёС‚СЊ СЃР°Рј</span>",
    workflowLead:"Р—РѕРЅР° Р·Р°С…РІР°С‚Сѓ РЅР°Р»Р°С€С‚РѕРІСѓС”С‚СЊСЃСЏ РѕРґРёРЅ СЂР°Р·. РџС–СЃР»СЏ С†СЊРѕРіРѕ OBS/OCR С‡РёС‚Р°С” РїРѕС‚СЂС–Р±РЅСѓ С‡Р°СЃС‚РёРЅСѓ РІС–РєРЅР° Lineage 2 С‚Р° Р°РІС‚РѕРјР°С‚РёС‡РЅРѕ РѕРЅРѕРІР»СЋС” RB timer С– РєР°СЂС‚Сѓ.",
    step1Title:"Р—Р°РїСѓСЃС‚Рё РіСЂСѓ С‚Р° OBS", step1Text:"WebSocket РїСЂР°С†СЋС” РЅР° СЃС‚Р°РЅРґР°СЂС‚РЅРѕРјСѓ РїРѕСЂС‚Сѓ 4455.",
    step2Title:"Р’РёРґС–Р»Рё СЃРёСЃС‚РµРјРЅРёР№ С‡Р°С‚", step2Text:"Р’РєР°Р¶Рё X, Y, С€РёСЂРёРЅСѓ С‚Р° РІРёСЃРѕС‚Сѓ РѕР±Р»Р°СЃС‚С– OCR.",
    step3Title:"РќР°С‚РёСЃРЅРё В«Р—Р°РїСѓСЃС‚РёС‚РёВ»", step3Text:"РўР°Р№РјРµСЂРё Р Р‘ С– РѕРЅР»Р°Р№РЅ-РєР°СЂС‚Р° РѕРЅРѕРІР»СЋСЋС‚СЊСЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РЅРѕ.",
    visualGuide:"Р’С–Р·СѓР°Р»СЊРЅР° С–РЅСЃС‚СЂСѓРєС†С–СЏ", chatAreaTitle:"РџСЂР°РІРёР»СЊРЅР° Р·РѕРЅР° С‡Р°С‚Сѓ", chatAreaText:"РЈ РєР°РґСЂС– РјР°СЋС‚СЊ Р±СѓС‚Рё СЃРёСЃС‚РµРјРЅС– РїРѕРІС–РґРѕРјР»РµРЅРЅСЏ РїСЂРѕ Р Р‘.",
    settingsKicker:"Р“РЅСѓС‡РєРёР№ overlay", settingsTitle:"РўР°Р№РјРµСЂ Р Р‘ РїРѕРІРµСЂС… РіСЂРё<br><span>СЃР°РјРµ С‚Р°Рј, РґРµ Р·СЂСѓС‡РЅРѕ</span>",
    detail1Title:"РўРѕС‡РЅРµ РїРѕР·РёС†С–РѕРЅСѓРІР°РЅРЅСЏ", detail1Text:"РљРѕРѕСЂРґРёРЅР°С‚Рё С‚Р° СЂРѕР·РјС–СЂ Р·Р°РґР°СЋС‚СЊСЃСЏ С‡РёСЃРµР»СЊРЅРѕ, С‚РѕРјСѓ overlay Р»РµРіРєРѕ РїРѕСЃС‚Р°РІРёС‚Рё РІ РїРѕС‚СЂС–Р±РЅРёР№ РєСѓС‚.",
    detail2Title:"РџРѕРїРµСЂРµРґРЅС–Р№ РїРµСЂРµРіР»СЏРґ", detail2Text:"РџРµСЂРµРІС–СЂ СЂРµР·СѓР»СЊС‚Р°С‚ РґРѕ Р·Р°РїСѓСЃРєСѓ РјРѕРЅС–С‚РѕСЂР° С‚Р° РЅРµ РІРёС‚СЂР°С‡Р°Р№ С‡Р°СЃ Сѓ РіСЂС–.",
    detail3Title:"РџС–РґС‚СЂРёРјРєР° СЂС–Р·РЅРёС… СЂРѕР·РґС–Р»СЊРЅРѕСЃС‚РµР№", detail3Text:"РћРєСЂРµРјРѕ Р·Р°РґР°С”С‚СЊСЃСЏ СЂРѕР·РјС–СЂ РєР°РґСЂСѓ OBS С– Р·РѕРЅР° СЃРёСЃС‚РµРјРЅРѕРіРѕ С‡Р°С‚Сѓ.",
    mapKicker:"РљР°СЂС‚Р° Р Р‘ Р›2", mapTitle:"Lineage 2 High Five РєР°СЂС‚Р° Р Р‘<br><span>Р· Р¶РёРІРёРјРё С‚Р°Р№РјРµСЂР°РјРё СЂРµСЃРїСѓ</span>",
    mapLead:"РЁСѓРєР°Р№ РїРѕС‚СЂС–Р±РЅРѕРіРѕ СЂРµР№Рґ-Р±РѕСЃР° Р·Р° РЅР°Р·РІРѕСЋ, РґРёРІРёСЃСЊ Р№РѕРіРѕ РєРѕРѕСЂРґРёРЅР°С‚Рё С‚Р° СЃС‚РµР¶ Р·Р° Р°РєС‚РёРІРЅРёРјРё С‚Р°Р№РјРµСЂР°РјРё Р· РџРљ Р°Р±Рѕ С‚РµР»РµС„РѕРЅР°. РљР°СЂС‚Р° РѕСЂС–С”РЅС‚РѕРІР°РЅР° РЅР° High Five С– РїРѕС‚РѕС‡РЅСѓ РєРѕРЅС„С–РіСѓСЂР°С†С–СЋ BohPts x500.",
    hotspotSearch:"РџРѕС€СѓРє Р Р‘", hotspotTimer:"РђРєС‚РёРІРЅРёР№ С‚Р°Р№РјРµСЂ", hotspotPoint:"РўРѕС‡РєР° РЅР° РєР°СЂС‚С–",
    mapBenefit1Title:"РџРѕС€СѓРє Р·Р° РЅР°Р·РІРѕСЋ", mapBenefit1Text:"RU С‚Р° ENG РЅР°Р·РІРё СЂРµР№Рґ-Р±РѕСЃС–РІ.",
    mapBenefit2Title:"РЎС‚Р°РЅРё РєРѕР»СЊРѕСЂР°РјРё", mapBenefit2Text:"Р–РёРІРёР№, СЂРµСЃРї С‚Р° С‚РёРјС‡Р°СЃРѕРІР° С‚РѕС‡РєР°.",
    mapBenefit3Title:"РЎРїС–Р»СЊРЅР° СЃРёРЅС…СЂРѕРЅС–Р·Р°С†С–СЏ", mapBenefit3Text:"Р”Р°РЅС– РєР°СЂС‚Рё Р Р‘ РѕРЅРѕРІР»СЋСЋС‚СЊСЃСЏ РґР»СЏ РІСЃС–С… РєРѕСЂРёСЃС‚СѓРІР°С‡С–РІ.",
    seoKicker:"BohPts x500 вЂў High Five", seoTitle:"Raid Boss Timer С‚Р° РєР°СЂС‚Р° Р Р‘ РґР»СЏ Lineage 2",
    seoLead:"РЇРєС‰Рѕ С‚Рё С€СѓРєР°С”С€ В«РєР°СЂС‚Р° СЂР± Р»2В», В«С‚Р°Р№РјРµСЂ СЂР± Р»2В», В«BohPts x500В», В«raid boss timerВ» Р°Р±Рѕ В«Lineage 2 High Five mapВ», Yura RB Monitor РѕР±вЂ™С”РґРЅСѓС” С†С– С„СѓРЅРєС†С–С— РІ РѕРґРЅРѕРјСѓ Windows-Р»Р°СѓРЅС‡РµСЂС–.",
    seoCard1Title:"РљР°СЂС‚Р° Р Р‘ Р›2", seoCard1Text:"РћРЅР»Р°Р№РЅ-РєР°СЂС‚Р° СЂРµР№Рґ-Р±РѕСЃС–РІ Lineage 2 High Five Р· РєРѕРѕСЂРґРёРЅР°С‚Р°РјРё, РїРѕС€СѓРєРѕРј С– РїРѕС‚РѕС‡РЅРёРјРё С‚Р°Р№РјРµСЂР°РјРё СЂРµСЃРїСѓ.",
    seoCard2Title:"BohPts x500", seoCard2Text:"РџРѕС‚РѕС‡РЅР° Р±Р°Р·Р° РїРѕРІС–РґРѕРјР»РµРЅСЊ, Р±РѕСЃС–РІ С– СЃС†РµРЅР°СЂС–С—РІ РјРѕРЅС–С‚РѕСЂР° РЅР°Р»Р°С€С‚РѕРІР°РЅР° РїС–Рґ High Five С‚Р° РІРёРєРѕСЂРёСЃС‚Р°РЅРЅСЏ РЅР° BohPts x500.",
    seoCard3Title:"Raid Boss Timer", seoCard3Text:"РђРІС‚РѕРјР°С‚РёС‡РЅРёР№ raid boss respawn timer Р·Р°РїСѓСЃРєР°С”С‚СЊСЃСЏ РїС–СЃР»СЏ OCR-СЂРѕР·РїС–Р·РЅР°РІР°РЅРЅСЏ РїРѕРІС–РґРѕРјР»РµРЅСЊ Сѓ СЃРёСЃС‚РµРјРЅРѕРјСѓ С‡Р°С‚С–.",
    languageKicker:"РўСЂРё РјРѕРІРё", languageTitle:"РћРґРёРЅ С–РЅСЃС‚СЂСѓРјРµРЅС‚ вЂ”<br><span>Р·СЂРѕР·СѓРјС–Р»РёР№ СѓСЃС–Рј</span>",
    languageLead:"Р›Р°СѓРЅС‡РµСЂ, РєР°СЂС‚Р° Р Р‘, РЅР°Р»Р°С€С‚СѓРІР°РЅРЅСЏ С‚Р° РѕСЃРЅРѕРІРЅС– РїС–РґРєР°Р·РєРё РґРѕСЃС‚СѓРїРЅС– СѓРєСЂР°С—РЅСЃСЊРєРѕСЋ, СЂРѕСЃС–Р№СЃСЊРєРѕСЋ Р№ Р°РЅРіР»С–Р№СЃСЊРєРѕСЋ.",
    faqTitle:"РџРёС‚Р°РЅРЅСЏ РїРµСЂРµРґ<br><span>РїРµСЂС€РёРј Р·Р°РїСѓСЃРєРѕРј</span>", faqLead:"РљРѕСЂРѕС‚РєРѕ РїСЂРѕ С‚Рµ, С‰Рѕ РїРѕС‚СЂС–Р±РЅРѕ РґР»СЏ СЃС‚Р°Р±С–Р»СЊРЅРѕС— СЂРѕР±РѕС‚Рё.",
    faq1Q:"Р§Рё РїРѕС‚СЂС–Р±РЅРѕ С‚СЂРёРјР°С‚Рё OBS РІС–РґРєСЂРёС‚РёРј?", faq1A:"РўР°Рє. OBS РїРµСЂРµРґР°С” Р·РѕР±СЂР°Р¶РµРЅРЅСЏ СЃРёСЃС‚РµРјРЅРѕРіРѕ С‡Р°С‚Сѓ С‡РµСЂРµР· WebSocket, Р° РјРѕРЅС–С‚РѕСЂ СЂРѕР·РїС–Р·РЅР°С” РїРѕРІС–РґРѕРјР»РµРЅРЅСЏ OCR.",
    faq2Q:"Р§Рё РјРѕР¶РЅР° Р·РјС–РЅРёС‚Рё РїРѕР»РѕР¶РµРЅРЅСЏ overlay?", faq2A:"РўР°Рє. РЈ РЅР°Р»Р°С€С‚СѓРІР°РЅРЅСЏС… РґРѕСЃС‚СѓРїРЅС– РєРѕРѕСЂРґРёРЅР°С‚Рё X/Y, С€РёСЂРёРЅР°, РІРёСЃРѕС‚Р°, РјР°СЃС€С‚Р°Р± С– РєРѕР»С–СЂ С‚РµРєСЃС‚Сѓ.",
    faq3Q:"РљР°СЂС‚Р° Р Р‘ РїСЂР°С†СЋС” РЅР° С‚РµР»РµС„РѕРЅС–?", faq3A:"РўР°Рє. Р’С–РґРєСЂРёР№С‚Рµ РєР°СЂС‚Сѓ РЅР° Р»С–С†РµРЅР·РѕРІР°РЅРѕРјСѓ РџРљ, РЅР°С‚РёСЃРЅС–С‚СЊ В«РўРµР»РµС„РѕРЅ / QRВ» С– РІС–РґСЃРєР°РЅСѓР№С‚Рµ РѕРґРЅРѕСЂР°Р·РѕРІРёР№ QR-РєРѕРґ. Р”Рѕ РѕРґРЅС–С”С— Р»С–С†РµРЅР·С–С— РїСЂРёРІвЂ™СЏР·СѓС”С‚СЊСЃСЏ РѕРґРёРЅ РџРљ С– РѕРґРёРЅ РјРѕР±С–Р»СЊРЅРёР№ Р±СЂР°СѓР·РµСЂ.",
    faq4Q:"Р”Р»СЏ СЏРєРѕРіРѕ СЃРµСЂРІРµСЂР° Р·СЂРѕР±Р»РµРЅРёР№ РјРѕРЅС–С‚РѕСЂ?", faq4A:"РђСЂС…С–С‚РµРєС‚СѓСЂР° СЂРѕР·СЂР°С…РѕРІР°РЅР° РЅР° Lineage 2 High Five. РџРѕС‚РѕС‡РЅР° РєРѕРЅС„С–РіСѓСЂР°С†С–СЏ С„СЂР°Р·, Р±РѕСЃС–РІ С– С‚Р°Р№РјРµСЂС–РІ РѕСЂС–С”РЅС‚РѕРІР°РЅР° РЅР° BohPts x500; Р±Р°Р·Р° РјРѕР¶Рµ Р°РґР°РїС‚СѓРІР°С‚РёСЃСЏ РїС–Рґ С–РЅС€РёР№ СЃРµСЂРІРµСЂ.",
    ctaKicker:"РњРµРЅС€Рµ СЂСѓС‚РёРЅРё. Р‘С–Р»СЊС€Рµ РіСЂРё.", ctaTitle:"Р—Р°РїСѓСЃС‚Рё РєР°СЂС‚Сѓ Р Р‘ С– С‚Р°Р№РјРµСЂРё Lineage 2",
    ctaText:"Р’СЃС‚Р°РЅРѕРІРё РєРѕРјРїРѕРЅРµРЅС‚Рё, РІРёР±РµСЂРё Р·РѕРЅСѓ С‡Р°С‚Сѓ С‚Р° Р·Р°РїСѓСЃРєР°Р№ Yura RB Monitor РѕРґРЅС–С”СЋ РєРЅРѕРїРєРѕСЋ.",
    downloadNow:"Р—Р°РІР°РЅС‚Р°Р¶РёС‚Рё Yura RB Monitor", footerNote:"Lineage 2 High Five вЂў BohPts x500 вЂў РљР°СЂС‚Р° Р Р‘ вЂў Raid Boss Timer вЂў OBS/OCR"
  },
  ru: {
    navFeatures:"Р’РѕР·РјРѕР¶РЅРѕСЃС‚Рё", navSetup:"РќР°СЃС‚СЂРѕР№РєР°", navMap:"РљР°СЂС‚Р° Р Р‘", navFaq:"FAQ",
    previewBadge:"Yura RB Monitor вЂў Lineage 2 High Five вЂў BohPts x500",
    heroTitle:"РљР°СЂС‚Р° Р Р‘ Р›2 Рё С‚Р°Р№РјРµСЂ СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ<br><span>Р±РµР· СЂСѓС‡РЅС‹С… СЃРµРєСѓРЅРґРѕРјРµСЂРѕРІ</span>",
    heroLead:"Yura RB Monitor вЂ” РєР°СЂС‚Р° Р Р‘ Р›2 Рё raid boss timer РґР»СЏ Lineage 2 High Five Рё BohPts x500. OBS/OCR С‡РёС‚Р°РµС‚ СЃРёСЃС‚РµРјРЅС‹Р№ С‡Р°С‚, Р·Р°РїСѓСЃРєР°РµС‚ С‚Р°Р№РјРµСЂС‹ СЂРµСЃРїР°, РїРѕРєР°Р·С‹РІР°РµС‚ overlay РїРѕРІРµСЂС… РёРіСЂС‹ Рё СЃРёРЅС…СЂРѕРЅРёР·РёСЂСѓРµС‚ Р°РєС‚РёРІРЅС‹С… СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ РЅР° РѕРЅР»Р°Р№РЅ-РєР°СЂС‚Рµ.",
    heroPrimary:"РџРѕСЃРјРѕС‚СЂРµС‚СЊ, РєР°Рє СЂР°Р±РѕС‚Р°РµС‚", download:"РЎРєР°С‡Р°С‚СЊ",
    metricBosses:"СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ", metricLanguages:"СЏР·С‹РєР° РёРЅС‚РµСЂС„РµР№СЃР°", metricMap:"СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёСЏ РєР°СЂС‚С‹",
    liveInterface:"Р–РёРІРѕР№ РёРЅС‚РµСЂС„РµР№СЃ Р»Р°СѓРЅС‡РµСЂР°", ocrStatus:"С‡Р°С‚ СЂР°СЃРїРѕР·РЅР°РЅ", mapStatus:"С‚Р°Р№РјРµСЂС‹ СЃРёРЅС…СЂРѕРЅРёР·РёСЂРѕРІР°РЅС‹", overlayStatus:"РїРѕРІРµСЂС… РёРіСЂС‹",
    whyKicker:"Lineage 2 High Five", whyTitle:"РљР°СЂС‚Р° Р Р‘, С‚Р°Р№РјРµСЂ СЂРµСЃРїР° Рё overlay<br><span>РІ РѕРґРЅРѕРј РёРЅС‚РµСЂС„РµР№СЃРµ</span>",
    whyLead:"Р’РјРµСЃС‚Рѕ СЂСѓС‡РЅС‹С… СЃРµРєСѓРЅРґРѕРјРµСЂРѕРІ Рё СЃРєСЂРёРЅРѕРІ вЂ” Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРѕРµ OCR-СЂР°СЃРїРѕР·РЅР°РІР°РЅРёРµ, raid boss timer Рё Р¶РёРІР°СЏ РєР°СЂС‚Р° Р Р‘ РґР»СЏ High Five, СЃ РєРѕРЅС„РёРіСѓСЂР°С†РёРµР№ РїРѕРґ BohPts x500.",
    featureOcrTitle:"OCR СЃРёСЃС‚РµРјРЅРѕРіРѕ С‡Р°С‚Р°", featureOcrText:"РњРѕРЅРёС‚РѕСЂ РЅР°С…РѕРґРёС‚ РІ С‡Р°С‚Рµ Lineage 2 СЃРѕРѕР±С‰РµРЅРёСЏ Рѕ РїРѕСЏРІР»РµРЅРёРё РёР»Рё СЃРјРµСЂС‚Рё Р Р‘ Рё Р·Р°РїСѓСЃРєР°РµС‚ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РёР№ С‚Р°Р№РјРµСЂ СЂРµСЃРїР°.",
    featureOverlayTitle:"РРіСЂРѕРІРѕР№ overlay", featureOverlayText:"РўР°Р№РјРµСЂС‹ СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ РІСЃРµРіРґР° РІРёРґРЅС‹ РїРѕРІРµСЂС… РєР»РёРµРЅС‚Р°. Р¦РІРµС‚, РјР°СЃС€С‚Р°Р±, РїРѕР·РёС†РёСЏ Рё СЂР°Р·РјРµСЂ РЅР°СЃС‚СЂР°РёРІР°СЋС‚СЃСЏ.",
    featureMapTitle:"РћРЅР»Р°Р№РЅ-РєР°СЂС‚Р° Р Р‘ Р›2", featureMapText:"Lineage 2 High Five map РїРѕРєР°Р·С‹РІР°РµС‚ Р°РєС‚РёРІРЅС‹Рµ С‚Р°Р№РјРµСЂС‹, РЅР°Р·РІР°РЅРёСЏ Р±РѕСЃСЃРѕРІ, РєРѕРѕСЂРґРёРЅР°С‚С‹, Р¶РёРІРѕР№ СЃС‚Р°С‚СѓСЃ Рё РѕРєРЅРѕ СЂРµСЃРїР°.",
    featureEpicTitle:"Р­РїРёРє Рё РѕСЃРѕР±С‹Рµ СЃРѕР±С‹С‚РёСЏ", featureEpicText:"РћС‚РґРµР»СЊРЅС‹Рµ СЃРѕРѕР±С‰РµРЅРёСЏ Рё СЃС†РµРЅР°СЂРёРё РґР»СЏ СЌРїРёРє-Р±РѕСЃСЃРѕРІ, Lilith/Anakim Рё РґСЂСѓРіРёС… СЃРµСЂРІРµСЂРЅС‹С… СЃРѕР±С‹С‚РёР№.",
    workflowKicker:"Р‘С‹СЃС‚СЂР°СЏ РЅР°СЃС‚СЂРѕР№РєР°", workflowTitle:"РџРѕРєР°Р¶Рё СЃРєСЂРёРїС‚Сѓ С‡Р°С‚ вЂ”<br><span>РѕСЃС‚Р°Р»СЊРЅРѕРµ РѕРЅ СЃРґРµР»Р°РµС‚ СЃР°Рј</span>",
    workflowLead:"Р—РѕРЅР° Р·Р°С…РІР°С‚Р° РЅР°СЃС‚СЂР°РёРІР°РµС‚СЃСЏ РѕРґРёРЅ СЂР°Р·. Р—Р°С‚РµРј OBS/OCR С‡РёС‚Р°РµС‚ РЅСѓР¶РЅСѓСЋ С‡Р°СЃС‚СЊ РѕРєРЅР° Lineage 2 Рё Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РѕР±РЅРѕРІР»СЏРµС‚ RB timer Рё РєР°СЂС‚Сѓ.",
    step1Title:"Р—Р°РїСѓСЃС‚Рё РёРіСЂСѓ Рё OBS", step1Text:"WebSocket СЂР°Р±РѕС‚Р°РµС‚ РЅР° СЃС‚Р°РЅРґР°СЂС‚РЅРѕРј РїРѕСЂС‚Сѓ 4455.",
    step2Title:"Р’С‹РґРµР»Рё СЃРёСЃС‚РµРјРЅС‹Р№ С‡Р°С‚", step2Text:"РЈРєР°Р¶Рё X, Y, С€РёСЂРёРЅСѓ Рё РІС‹СЃРѕС‚Сѓ РѕР±Р»Р°СЃС‚Рё OCR.",
    step3Title:"РќР°Р¶РјРё В«Р—Р°РїСѓСЃС‚РёС‚СЊВ»", step3Text:"РўР°Р№РјРµСЂС‹ Р Р‘ Рё РѕРЅР»Р°Р№РЅ-РєР°СЂС‚Р° РѕР±РЅРѕРІР»СЏСЋС‚СЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё.",
    visualGuide:"Р’РёР·СѓР°Р»СЊРЅР°СЏ РёРЅСЃС‚СЂСѓРєС†РёСЏ", chatAreaTitle:"РџСЂР°РІРёР»СЊРЅР°СЏ Р·РѕРЅР° С‡Р°С‚Р°", chatAreaText:"Р’ РєР°РґСЂРµ РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ СЃРёСЃС‚РµРјРЅС‹Рµ СЃРѕРѕР±С‰РµРЅРёСЏ Рѕ Р Р‘.",
    settingsKicker:"Р“РёР±РєРёР№ overlay", settingsTitle:"РўР°Р№РјРµСЂ Р Р‘ РїРѕРІРµСЂС… РёРіСЂС‹<br><span>С‚Р°Рј, РіРґРµ СѓРґРѕР±РЅРѕ</span>",
    detail1Title:"РўРѕС‡РЅРѕРµ РїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёРµ", detail1Text:"РљРѕРѕСЂРґРёРЅР°С‚С‹ Рё СЂР°Р·РјРµСЂ Р·Р°РґР°СЋС‚СЃСЏ С‡РёСЃР»РµРЅРЅРѕ, РїРѕСЌС‚РѕРјСѓ overlay Р»РµРіРєРѕ РїРѕСЃС‚Р°РІРёС‚СЊ РІ РЅСѓР¶РЅС‹Р№ СѓРіРѕР».",
    detail2Title:"РџСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ РїСЂРѕСЃРјРѕС‚СЂ", detail2Text:"РџСЂРѕРІРµСЂСЊ СЂРµР·СѓР»СЊС‚Р°С‚ РґРѕ Р·Р°РїСѓСЃРєР° РјРѕРЅРёС‚РѕСЂР° Рё РЅРµ С‚СЂР°С‚СЊ РІСЂРµРјСЏ РІ РёРіСЂРµ.",
    detail3Title:"РџРѕРґРґРµСЂР¶РєР° СЂР°Р·РЅС‹С… СЂР°Р·СЂРµС€РµРЅРёР№", detail3Text:"РћС‚РґРµР»СЊРЅРѕ Р·Р°РґР°С‘С‚СЃСЏ СЂР°Р·РјРµСЂ РєР°РґСЂР° OBS Рё Р·РѕРЅР° СЃРёСЃС‚РµРјРЅРѕРіРѕ С‡Р°С‚Р°.",
    mapKicker:"РљР°СЂС‚Р° Р Р‘ Р›2", mapTitle:"Lineage 2 High Five РєР°СЂС‚Р° Р Р‘<br><span>СЃ Р¶РёРІС‹РјРё С‚Р°Р№РјРµСЂР°РјРё СЂРµСЃРїР°</span>",
    mapLead:"РС‰Рё РЅСѓР¶РЅРѕРіРѕ СЂРµР№Рґ-Р±РѕСЃСЃР° РїРѕ РЅР°Р·РІР°РЅРёСЋ, СЃРјРѕС‚СЂРё РєРѕРѕСЂРґРёРЅР°С‚С‹ Рё СЃР»РµРґРё Р·Р° Р°РєС‚РёРІРЅС‹РјРё С‚Р°Р№РјРµСЂР°РјРё СЃ РџРљ РёР»Рё С‚РµР»РµС„РѕРЅР°. РљР°СЂС‚Р° РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅР° РЅР° High Five Рё С‚РµРєСѓС‰СѓСЋ РєРѕРЅС„РёРіСѓСЂР°С†РёСЋ BohPts x500.",
    hotspotSearch:"РџРѕРёСЃРє Р Р‘", hotspotTimer:"РђРєС‚РёРІРЅС‹Р№ С‚Р°Р№РјРµСЂ", hotspotPoint:"РўРѕС‡РєР° РЅР° РєР°СЂС‚Рµ",
    mapBenefit1Title:"РџРѕРёСЃРє РїРѕ РЅР°Р·РІР°РЅРёСЋ", mapBenefit1Text:"RU Рё ENG РЅР°Р·РІР°РЅРёСЏ СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ.",
    mapBenefit2Title:"РЎРѕСЃС‚РѕСЏРЅРёСЏ С†РІРµС‚РѕРј", mapBenefit2Text:"Р–РёРІРѕР№, СЂРµСЃРї Рё РІСЂРµРјРµРЅРЅР°СЏ С‚РѕС‡РєР°.",
    mapBenefit3Title:"РћР±С‰Р°СЏ СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёСЏ", mapBenefit3Text:"Р”Р°РЅРЅС‹Рµ РєР°СЂС‚С‹ Р Р‘ РѕР±РЅРѕРІР»СЏСЋС‚СЃСЏ РґР»СЏ РІСЃРµС… РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№.",
    seoKicker:"BohPts x500 вЂў High Five", seoTitle:"Raid Boss Timer Рё РєР°СЂС‚Р° Р Р‘ РґР»СЏ Lineage 2",
    seoLead:"Р•СЃР»Рё РІС‹ РёС‰РµС‚Рµ В«РєР°СЂС‚Р° СЂР± Р»2В», В«С‚Р°Р№РјРµСЂ СЂР± Р»2В», В«BohPts x500В», В«raid boss timerВ» РёР»Рё В«Lineage 2 High Five mapВ», Yura RB Monitor РѕР±СЉРµРґРёРЅСЏРµС‚ СЌС‚Рё С„СѓРЅРєС†РёРё РІ РѕРґРЅРѕРј Windows-Р»Р°СѓРЅС‡РµСЂРµ.",
    seoCard1Title:"РљР°СЂС‚Р° Р Р‘ Р›2", seoCard1Text:"РћРЅР»Р°Р№РЅ-РєР°СЂС‚Р° СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ Lineage 2 High Five СЃ РєРѕРѕСЂРґРёРЅР°С‚Р°РјРё, РїРѕРёСЃРєРѕРј Рё С‚РµРєСѓС‰РёРјРё С‚Р°Р№РјРµСЂР°РјРё СЂРµСЃРїР°.",
    seoCard2Title:"BohPts x500", seoCard2Text:"РўРµРєСѓС‰Р°СЏ Р±Р°Р·Р° СЃРѕРѕР±С‰РµРЅРёР№, Р±РѕСЃСЃРѕРІ Рё СЃС†РµРЅР°СЂРёРµРІ РјРѕРЅРёС‚РѕСЂР° РЅР°СЃС‚СЂРѕРµРЅР° РїРѕРґ High Five Рё РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РЅР° BohPts x500.",
    seoCard3Title:"Raid Boss Timer", seoCard3Text:"РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРёР№ raid boss respawn timer Р·Р°РїСѓСЃРєР°РµС‚СЃСЏ РїРѕСЃР»Рµ OCR-СЂР°СЃРїРѕР·РЅР°РІР°РЅРёСЏ СЃРѕРѕР±С‰РµРЅРёСЏ РІ СЃРёСЃС‚РµРјРЅРѕРј С‡Р°С‚Рµ.",
    languageKicker:"РўСЂРё СЏР·С‹РєР°", languageTitle:"РћРґРёРЅ РёРЅСЃС‚СЂСѓРјРµРЅС‚ вЂ”<br><span>РїРѕРЅСЏС‚РЅС‹Р№ РІСЃРµРј</span>",
    languageLead:"Р›Р°СѓРЅС‡РµСЂ, РєР°СЂС‚Р° Р Р‘, РЅР°СЃС‚СЂРѕР№РєРё Рё РѕСЃРЅРѕРІРЅС‹Рµ РїРѕРґСЃРєР°Р·РєРё РґРѕСЃС‚СѓРїРЅС‹ РЅР° СѓРєСЂР°РёРЅСЃРєРѕРј, СЂСѓСЃСЃРєРѕРј Рё Р°РЅРіР»РёР№СЃРєРѕРј.",
    faqTitle:"Р’РѕРїСЂРѕСЃС‹ РїРµСЂРµРґ<br><span>РїРµСЂРІС‹Рј Р·Р°РїСѓСЃРєРѕРј</span>", faqLead:"РљРѕСЂРѕС‚РєРѕ Рѕ С‚РѕРј, С‡С‚Рѕ РЅСѓР¶РЅРѕ РґР»СЏ СЃС‚Р°Р±РёР»СЊРЅРѕР№ СЂР°Р±РѕС‚С‹.",
    faq1Q:"РќСѓР¶РЅРѕ Р»Рё РґРµСЂР¶Р°С‚СЊ OBS РѕС‚РєСЂС‹С‚С‹Рј?", faq1A:"Р”Р°. OBS РїРµСЂРµРґР°С‘С‚ РёР·РѕР±СЂР°Р¶РµРЅРёРµ СЃРёСЃС‚РµРјРЅРѕРіРѕ С‡Р°С‚Р° С‡РµСЂРµР· WebSocket, Р° РјРѕРЅРёС‚РѕСЂ СЂР°СЃРїРѕР·РЅР°С‘С‚ СЃРѕРѕР±С‰РµРЅРёСЏ OCR.",
    faq2Q:"РњРѕР¶РЅРѕ РёР·РјРµРЅРёС‚СЊ РїРѕР»РѕР¶РµРЅРёРµ overlay?", faq2A:"Р”Р°. Р’ РЅР°СЃС‚СЂРѕР№РєР°С… РґРѕСЃС‚СѓРїРЅС‹ РєРѕРѕСЂРґРёРЅР°С‚С‹ X/Y, С€РёСЂРёРЅР°, РІС‹СЃРѕС‚Р°, РјР°СЃС€С‚Р°Р± Рё С†РІРµС‚ С‚РµРєСЃС‚Р°.",
    faq3Q:"РљР°СЂС‚Р° Р Р‘ СЂР°Р±РѕС‚Р°РµС‚ РЅР° С‚РµР»РµС„РѕРЅРµ?", faq3A:"Р”Р°. РћС‚РєСЂРѕР№С‚Рµ РєР°СЂС‚Сѓ РЅР° Р»РёС†РµРЅР·РёСЂРѕРІР°РЅРЅРѕРј РџРљ, РЅР°Р¶РјРёС‚Рµ В«РўРµР»РµС„РѕРЅ / QRВ» Рё РѕС‚СЃРєР°РЅРёСЂСѓР№С‚Рµ РѕРґРЅРѕСЂР°Р·РѕРІС‹Р№ QR-РєРѕРґ. Рљ РѕРґРЅРѕР№ Р»РёС†РµРЅР·РёРё РїСЂРёРІСЏР·С‹РІР°РµС‚СЃСЏ РѕРґРёРЅ РџРљ Рё РѕРґРёРЅ РјРѕР±РёР»СЊРЅС‹Р№ Р±СЂР°СѓР·РµСЂ.",
    faq4Q:"Р”Р»СЏ РєР°РєРѕРіРѕ СЃРµСЂРІРµСЂР° СЃРґРµР»Р°РЅ РјРѕРЅРёС‚РѕСЂ?", faq4A:"РђСЂС…РёС‚РµРєС‚СѓСЂР° СЂР°СЃСЃС‡РёС‚Р°РЅР° РЅР° Lineage 2 High Five. РўРµРєСѓС‰Р°СЏ РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ С„СЂР°Р·, Р±РѕСЃСЃРѕРІ Рё С‚Р°Р№РјРµСЂРѕРІ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅР° РЅР° BohPts x500; Р±Р°Р·Р° РјРѕР¶РµС‚ Р±С‹С‚СЊ Р°РґР°РїС‚РёСЂРѕРІР°РЅР° РїРѕРґ РґСЂСѓРіРѕР№ СЃРµСЂРІРµСЂ.",
    ctaKicker:"РњРµРЅСЊС€Рµ СЂСѓС‚РёРЅС‹. Р‘РѕР»СЊС€Рµ РёРіСЂС‹.", ctaTitle:"Р—Р°РїСѓСЃС‚Рё РєР°СЂС‚Сѓ Р Р‘ Рё С‚Р°Р№РјРµСЂС‹ Lineage 2",
    ctaText:"РЈСЃС‚Р°РЅРѕРІРё РєРѕРјРїРѕРЅРµРЅС‚С‹, РІС‹Р±РµСЂРё Р·РѕРЅСѓ С‡Р°С‚Р° Рё Р·Р°РїСѓСЃРєР°Р№ Yura RB Monitor РѕРґРЅРѕР№ РєРЅРѕРїРєРѕР№.",
    downloadNow:"РЎРєР°С‡Р°С‚СЊ Yura RB Monitor", footerNote:"Lineage 2 High Five вЂў BohPts x500 вЂў РљР°СЂС‚Р° Р Р‘ вЂў Raid Boss Timer вЂў OBS/OCR"
  },
  en: {
    navFeatures:"Features", navSetup:"Setup", navMap:"RB Map", navFaq:"FAQ",
    previewBadge:"Yura RB Monitor вЂў Lineage 2 High Five вЂў BohPts x500",
    heroTitle:"Lineage 2 RB map<br>& raid boss timer<br><span>without manual tracking</span>",
    heroLead:"Yura RB Monitor is a Lineage 2 High Five raid boss timer and live RB map for BohPts x500. OBS/OCR reads system-chat events, starts respawn timers, displays an in-game overlay and synchronizes active raid bosses to the online map.",
    heroPrimary:"See how it works", download:"Download",
    metricBosses:"raid bosses", metricLanguages:"interface languages", metricMap:"live map sync",
    liveInterface:"Live launcher interface", ocrStatus:"chat detected", mapStatus:"timers synchronized", overlayStatus:"over the game",
    whyKicker:"Lineage 2 High Five", whyTitle:"Raid boss map, respawn timer and overlay<br><span>in one interface</span>",
    whyLead:"Replace manual stopwatches and chat screenshots with OCR detection, a raid boss timer and a synchronized Lineage 2 High Five map, configured for BohPts x500.",
    featureOcrTitle:"System chat OCR", featureOcrText:"The monitor detects Lineage 2 raid boss spawn or death messages and starts the matching respawn timer.",
    featureOverlayTitle:"In-game overlay", featureOverlayText:"Raid boss timers stay visible above the game client. Color, scale, position and size are configurable.",
    featureMapTitle:"Lineage 2 raid boss map", featureMapText:"The High Five map shows active timers, raid boss names, coordinates, live status and respawn windows.",
    featureEpicTitle:"Epic and special events", featureEpicText:"Dedicated alerts and flows for epic bosses, Lilith/Anakim and other server events.",
    workflowKicker:"Fast setup", workflowTitle:"Show the script your chat вЂ”<br><span>it handles the rest</span>",
    workflowLead:"Configure the capture region once. OBS/OCR then reads the required Lineage 2 chat area and automatically updates the RB timer and map.",
    step1Title:"Launch the game and OBS", step1Text:"WebSocket uses the standard port 4455.",
    step2Title:"Select the system chat", step2Text:"Set the OCR region X, Y, width and height.",
    step3Title:"Press вЂњLaunchвЂќ", step3Text:"Raid boss timers and the online map update automatically.",
    visualGuide:"Visual setup guide", chatAreaTitle:"Correct chat region", chatAreaText:"The frame must include raid boss system messages.",
    settingsKicker:"Flexible overlay", settingsTitle:"Raid boss timers over the game<br><span>exactly where you want them</span>",
    detail1Title:"Precise positioning", detail1Text:"Coordinates and size are numeric, so the overlay is easy to place in any corner.",
    detail2Title:"Instant preview", detail2Text:"Check the result before launching the monitor and save time in game.",
    detail3Title:"Multiple resolutions", detail3Text:"OBS frame size and the system chat region are configured independently.",
    mapKicker:"Lineage 2 High Five map", mapTitle:"Live raid boss map<br><span>with respawn timers</span>",
    mapLead:"Search raid bosses by name, see coordinates and follow active timers from PC or mobile. The current map configuration targets High Five and BohPts x500.",
    hotspotSearch:"Boss search", hotspotTimer:"Active timer", hotspotPoint:"Map location",
    mapBenefit1Title:"Name search", mapBenefit1Text:"RU and ENG raid boss names.",
    mapBenefit2Title:"Color-coded states", mapBenefit2Text:"Alive, respawn and temporary point.",
    mapBenefit3Title:"Shared synchronization", mapBenefit3Text:"RB map data updates for every user.",
    seoKicker:"BohPts x500 вЂў High Five", seoTitle:"Lineage 2 High Five raid boss timer & map",
    seoLead:"Yura RB Monitor targets searches such as Lineage 2 raid boss timer, Lineage 2 High Five map, RB map, raid boss respawn timer and BohPts x500 with one practical Windows companion tool.",
    seoCard1Title:"Lineage 2 RB map", seoCard1Text:"Online Lineage 2 High Five raid boss map with coordinates, search and current respawn timers.",
    seoCard2Title:"BohPts x500", seoCard2Text:"The current boss-message database and monitoring scenarios are configured for High Five usage on BohPts x500.",
    seoCard3Title:"Raid Boss Timer", seoCard3Text:"The raid boss respawn timer starts automatically after OCR recognizes a supported system-chat event.",
    languageKicker:"Three languages", languageTitle:"One tool вЂ”<br><span>clear to everyone</span>",
    languageLead:"The launcher, RB map, settings and essential guidance are available in Ukrainian, Russian and English.",
    faqTitle:"Questions before<br><span>your first launch</span>", faqLead:"The essentials required for stable operation.",
    faq1Q:"Does OBS need to stay open?", faq1A:"Yes. OBS provides the system chat image through WebSocket and the monitor recognizes messages with OCR.",
    faq2Q:"Can I move the overlay?", faq2A:"Yes. Settings include X/Y coordinates, width, height, scale and text color.",
    faq3Q:"Does the RB map work on mobile?", faq3A:"Yes. Open the map on the licensed PC, select вЂњPhone / QRвЂќ and scan the one-time QR code. Each license can link one PC and one mobile browser.",
    faq4Q:"Which server is the monitor configured for?", faq4A:"The architecture targets Lineage 2 High Five. The current phrases, raid bosses and timer configuration are oriented to BohPts x500 and can be adapted to another server.",
    ctaKicker:"Less routine. More game.", ctaTitle:"Launch Yura RB Monitor",
    ctaText:"Install the components, select the chat region and launch Yura RB Monitor with one button.",
    downloadNow:"Download Yura RB Monitor", footerNote:"Lineage 2 High Five вЂў BohPts x500 вЂў RB Map вЂў Raid Boss Timer вЂў OBS/OCR"
  }
};

const seoMeta = {
  uk: {
    title:"РљР°СЂС‚Р° Р Р‘ Р›2 BohPts x500 вЂ” Lineage 2 High Five Raid Boss Timer | Yura RB Monitor",
    description:"РљР°СЂС‚Р° Р Р‘ Р›2 С‚Р° С‚Р°Р№РјРµСЂ СЂРµР№Рґ-Р±РѕСЃС–РІ РґР»СЏ Lineage 2 High Five / BohPts x500. OBS OCR, С‚Р°Р№РјРµСЂ СЂРµСЃРїСѓ, overlay, РєРѕРѕСЂРґРёРЅР°С‚Рё Р±РѕСЃС–РІ С– Р¶РёРІР° РѕРЅР»Р°Р№РЅ-РєР°СЂС‚Р° Р Р‘.",
    canonical:"https://lineage-script.com/",
    image:"https://lineage-script.com/assets/launcher-uk.webp"
  },
  ru: {
    title:"РљР°СЂС‚Р° Р Р‘ Р›2 BohPts x500 вЂ” С‚Р°Р№РјРµСЂ СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ Lineage 2 High Five | Yura RB Monitor",
    description:"РљР°СЂС‚Р° Р Р‘ Р›2 Рё С‚Р°Р№РјРµСЂ СЂРµР№Рґ-Р±РѕСЃСЃРѕРІ Lineage 2 High Five РґР»СЏ BohPts x500: OBS OCR, С‚Р°Р№РјРµСЂ СЂРµСЃРїР°, overlay, РєРѕРѕСЂРґРёРЅР°С‚С‹ Р±РѕСЃСЃРѕРІ Рё РѕРЅР»Р°Р№РЅ-РєР°СЂС‚Р° Р Р‘.",
    canonical:"https://lineage-script.com/ru.html",
    image:"https://lineage-script.com/assets/launcher-ru.webp"
  },
  en: {
    title:"Lineage 2 High Five Raid Boss Timer & RB Map вЂ” BohPts x500 | Yura RB Monitor",
    description:"Lineage 2 High Five raid boss timer and live RB map for BohPts x500 with OBS OCR, respawn timers, in-game overlay, boss coordinates and synchronized map status.",
    canonical:"https://lineage-script.com/en.html",
    image:"https://lineage-script.com/assets/launcher-en.webp"
  }
};

const imageSets = {
  launcher: {
    uk: "./assets/launcher-uk.webp",
    ru: "./assets/launcher-ru.webp",
    en: "./assets/launcher-en.webp"
  },
  settings: {
    uk: "./assets/settings-uk.webp",
    ru: "./assets/settings-ru.webp",
    en: "./assets/settings-en.webp"
  },
  map: {
    uk: "./assets/map-ru.webp",
    ru: "./assets/map-ru.webp",
    en: "./assets/map-en.webp"
  }
};

const langButtons = document.querySelectorAll("[data-lang]");
const html = document.documentElement;

function ensureMeta(selector, attrs = {}) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

function setSeoMeta(lang) {
  const meta = seoMeta[lang] || seoMeta.uk;
  document.title = meta.title;

  const description = ensureMeta('meta[name="description"]', {name:"description"});
  description.setAttribute("content", meta.description);

  const robots = ensureMeta('meta[name="robots"]', {name:"robots"});
  robots.setAttribute("content", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = meta.canonical;

  const alternates = {
    uk:"https://lineage-script.com/",
    ru:"https://lineage-script.com/ru.html",
    en:"https://lineage-script.com/en.html",
    "x-default":"https://lineage-script.com/"
  };
  Object.entries(alternates).forEach(([hreflang, href]) => {
    let link = document.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      document.head.appendChild(link);
    }
    link.href = href;
  });

  const social = {
    'meta[property="og:type"]': ["property", "og:type", "website"],
    'meta[property="og:site_name"]': ["property", "og:site_name", "Yura RB Monitor"],
    'meta[property="og:title"]': ["property", "og:title", meta.title],
    'meta[property="og:description"]': ["property", "og:description", meta.description],
    'meta[property="og:url"]': ["property", "og:url", meta.canonical],
    'meta[property="og:image"]': ["property", "og:image", meta.image],
    'meta[name="twitter:card"]': ["name", "twitter:card", "summary_large_image"],
    'meta[name="twitter:title"]': ["name", "twitter:title", meta.title],
    'meta[name="twitter:description"]': ["name", "twitter:description", meta.description],
    'meta[name="twitter:image"]': ["name", "twitter:image", meta.image]
  };
  Object.entries(social).forEach(([selector, values]) => {
    const [attr, key, value] = values;
    const node = ensureMeta(selector, {[attr]:key});
    node.setAttribute("content", value);
  });

  let jsonLd = document.getElementById("yura-software-jsonld");
  if (!jsonLd) {
    jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.id = "yura-software-jsonld";
    document.head.appendChild(jsonLd);
  }
  jsonLd.textContent = JSON.stringify({
    "@context":"https://schema.org",
    "@type":"SoftwareApplication",
    "name":"Yura RB Monitor",
    "applicationCategory":"UtilitiesApplication",
    "operatingSystem":"Windows 10, Windows 11",
    "url":meta.canonical,
    "downloadUrl":DOWNLOAD_LATEST,
    "image":meta.image,
    "description":meta.description,
    "keywords":[
      "РєР°СЂС‚Р° Р Р‘ Р›2",
      "С‚Р°Р№РјРµСЂ Р Р‘ Р›2",
      "Lineage 2 High Five map",
      "Lineage 2 raid boss timer",
      "raid boss respawn timer",
      "BohPts x500",
      "Lineage 2 RB map",
      "OBS OCR"
    ]
  });
}

function installSeoSection() {
  if (document.getElementById("seo-lineage2")) return;
  const faq = document.getElementById("faq");
  if (!faq) return;

  const section = document.createElement("section");
  section.className = "section compact";
  section.id = "seo-lineage2";
  section.innerHTML = `
    <div class="shell">
      <div class="section-heading reveal">
        <p class="kicker" data-i18n="seoKicker">BohPts x500 вЂў High Five</p>
        <h2 data-i18n="seoTitle">Raid Boss Timer С‚Р° РєР°СЂС‚Р° Р Р‘ РґР»СЏ Lineage 2</h2>
        <p data-i18n="seoLead">РљР°СЂС‚Р° Р Р‘ Р›2, raid boss timer, Lineage 2 High Five map С‚Р° BohPts x500 РІ РѕРґРЅРѕРјСѓ Windows-С–РЅСЃС‚СЂСѓРјРµРЅС‚С–.</p>
      </div>
      <div class="feature-grid">
        <article class="feature-card reveal tilt">
          <div class="icon-shell">вЊ–</div>
          <h3 data-i18n="seoCard1Title">РљР°СЂС‚Р° Р Р‘ Р›2</h3>
          <p data-i18n="seoCard1Text">РћРЅР»Р°Р№РЅ-РєР°СЂС‚Р° СЂРµР№Рґ-Р±РѕСЃС–РІ Lineage 2 High Five.</p>
          <span class="feature-index">RB</span>
          <span class="seo-more">Докладніше →</span>
        </a>
        <a class="feature-card seo-link-card reveal delay-1 tilt" href="/bohpts-x500-rb-timer.html">
          <div class="icon-shell">Г—500</div>
          <h3 data-i18n="seoCard2Title">BohPts x500</h3>
          <p data-i18n="seoCard2Text">РљРѕРЅС„С–РіСѓСЂР°С†С–СЏ РїС–Рґ High Five С‚Р° BohPts x500.</p>
          <span class="feature-index">L2</span>
          <span class="seo-more">BohPts x500 →</span>
        </a>
        <a class="feature-card seo-link-card reveal delay-2 tilt" href="/lineage2-rb-map.html">
          <div class="icon-shell">вЏ±</div>
          <h3 data-i18n="seoCard3Title">Raid Boss Timer</h3>
          <p data-i18n="seoCard3Text">РђРІС‚РѕРјР°С‚РёС‡РЅРёР№ С‚Р°Р№РјРµСЂ СЂРµСЃРїСѓ РїС–СЃР»СЏ OCR-РїРѕРґС–С—.</p>
          <span class="feature-index">T</span>
          <span class="seo-more">Raid Boss Map →</span>
        </a>
      </div>
    </div>`;
  faq.parentNode.insertBefore(section, faq);
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.uk;
  html.lang = lang;
  localStorage.setItem("yura-site-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-lang-image]").forEach(button => {
    const type = button.dataset.langImage;
    const img = button.querySelector("img");
    if (img && imageSets[type]) img.src = imageSets[type][lang];
  });

  langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  setSeoMeta(lang);
}

// Permanent version-independent download URL.
document.querySelectorAll('a[href*="/releases/latest/download/YuraRBMonitor_Client_"]').forEach(a => {
  a.href = DOWNLOAD_LATEST;
});

installSeoSection();

langButtons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
const queryLang = new URLSearchParams(window.location.search).get("lang");
const path = window.location.pathname.toLowerCase();
const pathLang = path.endsWith("/ru.html")
  ? "ru"
  : path.endsWith("/en.html")
    ? "en"
    : null;
const initialLang = ["uk","ru","en"].includes(queryLang)
  ? queryLang
  : (pathLang || localStorage.getItem("yura-site-lang") || "uk");
setLanguage(initialLang);

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 18), {passive:true});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.14});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
document.querySelectorAll("[data-lightbox]").forEach(btn => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

const finePointer = matchMedia("(pointer:fine)").matches;
if (finePointer && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      const base = card.classList.contains("frame-hero") ? "rotateY(-5deg) rotateX(2deg) " : "";
      card.style.transform = `${base}rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => card.style.transform = "");
  });
}

const sparks = document.getElementById("sparks");
for (let i = 0; i < 26; i++) {
  const s = document.createElement("span");
  s.className = "spark";
  s.style.left = `${Math.random() * 100}%`;
  s.style.setProperty("--duration", `${8 + Math.random() * 12}s`);
  s.style.setProperty("--delay", `${-Math.random() * 18}s`);
  s.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
  s.style.width = s.style.height = `${1 + Math.random() * 2.4}px`;
  sparks.appendChild(s);
}
