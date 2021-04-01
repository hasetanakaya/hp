//　画面サイズと言語の判定

let viewMode = 'ja';

const checkViewMode = (lang, windowSize) => {
    if (lang === 'ja') {
        if (!windowSize.matches) {
            viewMode = 'ja_pc'
        } else {
            viewMode = 'ja_sm'
        }
    } else {
        if (!windowSize.matches) {
            viewMode = 'en_pc'
        } else {
            viewMode = 'en_sm'
        }
    }
    console.log( 'viewMode: ' + viewMode);
    return viewMode;


    // if (!windowSize.matches) {
    //     // 1024px以上
    //     if (lang === 'ja') {
    //       console.log('ja: ' + viewMode)
    //       viewMode = 'ja'
    //     } else {
    //       console.log('en: ' + viewMode)
    //         viewMode = 'en'
    //     }
    //   } else {
    //     // 1023以下
    //     if (lang === 'ja') {
    //       console.log('ja_md: ' + viewMode)
    //         viewMode = 'ja_md'
    //     } else {
    //       console.log('en_md: ' + viewMode)
    //         viewMode = 'en_md'
    //     }
    // }
    // return viewMode;
}

export default ({}, inject) => {
    inject('checkViewMode', checkViewMode);
}
