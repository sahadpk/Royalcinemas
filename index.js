const paragraphs = [
    {
        id: 'sample_translate_test',
        englishContent: 'english smaple test',
        malayalamContent: 'malayalam sample test'
    },
    {
        id: 'aboutpara',
        englishContent: 'Your Gateway to Home Theatre Excellence! Indulge in the ultimate cinematic  experience without leaving the comfort of your own home.Our team of experts is dedicated to creating personalized home theatre solutions that bring the magic of the big screen directly to your living space.',



        malayalamContent: 'ഹോം തിയറ്റർ മികവിലേക്കുള്ള നിങ്ങളുടെ ഗേറ്റ്‌വേ! ആത്യന്തിക സിനിമയിൽ മുഴുകുക നിങ്ങളുടെ സ്വന്തം വീടിന്റെ സുഖസൗകര്യങ്ങൾ ഉപേക്ഷിക്കാതെ അനുഭവിക്കുക  ഞങ്ങളുടെ വിദഗ്‌ധസംഘം സമർപ്പിതമാണ് ബിഗ് സ്‌ക്രീനിന്റെ മാന്ത്രികത നേരിട്ട് കൊണ്ടുവരുന്ന വ്യക്തിഗതമാക്കിയ ഹോം തിയറ്റർ പരിഹാരങ്ങൾ സൃഷ്ടിക്കുന്നു നിങ്ങളുടെ താമസസ്ഥലത്തേക്ക്.'



    }
];




const onChangeLanCheckBox = (checked) => {
    
    let sourceLang = "en";
    let targetLang = "ml";

    if(!checked) {
        sourceLang = "ml";
        targetLang = "en";
    }

    paragraphs.forEach((data) => {
        if (targetLang == "en") {
            changeContent(data.englishContent, data.id)
        }
        else {
            changeContent(data.malayalamContent, data.id)
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const checkbox1 = document.querySelector('#langMode');
    const checkbox2 = document.querySelector('#langModeMobile');

    checkbox1.addEventListener('change', () => {
      checkbox2.checked = checkbox1.checked;
      onChangeLanCheckBox(checkbox1.checked)
    });

    checkbox2.addEventListener('change', () => {
        checkbox1.checked = checkbox2.checked;
        onChangeLanCheckBox(checkbox2.checked)
      });
});


const changeContent = (content, id,) => {
    document.getElementById(id).innerText = content;
    return true;
}


// const changeContent = async (content, id, sourceLang, targetLang) => {
//     return new Promise(async (resolve, reject) => {
//         var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(content);
//         $.getJSON(url, function (data) {
//             let result = data?.[0]?.[0]?.[0];
//             document.getElementById(id).innerText = result;
//             resolve(true);
//         });
//     })
// }

