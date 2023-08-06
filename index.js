const paragraphs = [
    {
        id: 'sample_translate_test',
        englishContent: 'Choose Royal Cinemas for personalized home theatre design, cutting-edge audiovisual systems, and flawless professional installation. Elevate your entertainment experience like never before.',
        malayalamContent: 'വ്യക്തിഗതമാക്കിയ ഹോം തിയറ്റർ ഡിസൈനിനായി റോയൽ സിനിമാസ് തിരഞ്ഞെടുക്കുക,    അത്യാധുനിക ഓഡിയോവിഷ്വൽ സിസ്റ്റങ്ങളും കുറ്റമറ്റ പ്രൊഫഷണൽ ഇൻസ്റ്റാളേഷനും. നിങ്ങളുടെ വിനോദം ഉയർത്തുക'
    },
    {
        id: 'aboutpara',
        englishContent: 'Your Gateway to Home Theatre Excellence! Indulge in the ultimate cinematic  experience without leaving the comfort of your own home.Our team of experts is dedicated to creating personalized home theatre solutions that bring the magic of the big screen directly to your living space.',
        malayalamContent: 'ഹോം തിയറ്റർ മികവിലേക്കുള്ള നിങ്ങളുടെ ഗേറ്റ്‌വേ! ആത്യന്തിക സിനിമയിൽ മുഴുകുക നിങ്ങളുടെ സ്വന്തം വീടിന്റെ സുഖസൗകര്യങ്ങൾ ഉപേക്ഷിക്കാതെ അനുഭവിക്കുക  ഞങ്ങളുടെ വിദഗ്‌ധസംഘം സമർപ്പിതമാണ് ബിഗ് സ്‌ക്രീനിന്റെ മാന്ത്രികത നേരിട്ട് കൊണ്ടുവരുന്ന വ്യക്തിഗതമാക്കിയ ഹോം തിയറ്റർ പരിഹാരങ്ങൾ സൃഷ്ടിക്കുന്നു നിങ്ങളുടെ താമസസ്ഥലത്തേക്ക്.'
    },
    {
        id: 'paraone',
        englishContent: 'Your cinematic dreams, meticulously realized. We create tailored  home theatres that complement your style and fulfill your specific requirements. Immerse yourself in a space designed for your ultimate viewing pleasure.',
        malayalamContent: 'നിങ്ങളുടെ സിനിമാ സ്വപ്നങ്ങൾ, സൂക്ഷ്മമായി സാക്ഷാത്കരിക്കപ്പെട്ടു. നിങ്ങളുടെ ശൈലിക്ക് യോജിച്ചതും നിങ്ങളുടെ നിർദ്ദിഷ്ട ആവശ്യകതകൾ നിറവേറ്റുന്നതുമായ ഹോം തിയേറ്ററുകൾ ഞങ്ങൾ സൃഷ്ടിക്കുന്നു. നിങ്ങളുടെ ആത്യന്തികമായ കാണൽ ആനന്ദത്തിനായി രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്ന സ്ഥലത്ത് മുഴുകുക.'
    },
    {
        id: 'paratwo',
        englishContent: 'Unleash the power of captivating sights and sounds. Our state-of-the-art sound systems, high-resolution projectors, and advanced screen  technologies transport you into a realm of unparalleled audiovisual brilliance.',
        malayalamContent: 'ആകർഷകമായ കാഴ്ചകളുടെയും ശബ്ദങ്ങളുടെയും ശക്തി അഴിച്ചുവിടുക. ഞങ്ങളുടെ അത്യാധുനിക ശബ്‌ദ സംവിധാനങ്ങൾ, ഉയർന്ന റെസല്യൂഷൻ പ്രൊജക്‌ടറുകൾ, നൂതന സ്‌ക്രീൻ സാങ്കേതികവിദ്യകൾ എന്നിവ നിങ്ങളെ സമാനതകളില്ലാത്ത ഓഡിയോ വിഷ്വൽ മിഴിവുള്ള ഒരു മേഖലയിലേക്ക് കൊണ്ടുപോകുന്നു.'
    },
    {
        id: 'parathree',
        englishContent: 'Sit back, relax, and let our experts work their magic. Our skilled technicians ensure seamless installation, from intricate wiring to equipment configuration. Experience hassle-free perfection, right from the start.',
        malayalamContent: 'ഇരിക്കുക, വിശ്രമിക്കുക, ഞങ്ങളുടെ വിദഗ്ധരെ അവരുടെ മായാജാലം പ്രവർത്തിക്കാൻ അനുവദിക്കുക. ഞങ്ങളുടെ വൈദഗ്ധ്യം  സങ്കീർണ്ണമായ വയറിംഗ് മുതൽ ഉപകരണങ്ങൾ വരെ തടസ്സമില്ലാത്ത ഇൻസ്റ്റാളേഷൻ സാങ്കേതിക വിദഗ്ധർ ഉറപ്പാക്കുന്നു         കോൺഫിഗറേഷൻ. തുടക്കം മുതൽ തന്നെ തടസ്സങ്ങളില്ലാത്ത പൂർണത അനുഭവിക്കുക.'
    },
    {
        id: 'parafour',
        englishContent: 'At Royal Cinemas, our commitment to exceptional customer service extends beyond the installation process. We value your satisfaction and are dedicated to providing ongoing support and maintenance for your home theater system.',
        malayalamContent: 'റോയൽ സിനിമാസിൽ, അസാധാരണമായ ഉപഭോക്തൃ സേവനത്തോടുള്ള ഞങ്ങളുടെ പ്രതിബദ്ധത ഇൻസ്റ്റലേഷൻ പ്രക്രിയയ്ക്കപ്പുറമാണ്. നിങ്ങളുടെ സംതൃപ്തിയെ ഞങ്ങൾ വിലമതിക്കുന്നു, നിങ്ങളുടെ ഹോം തിയേറ്റർ സിസ്റ്റത്തിന് തുടർച്ചയായ പിന്തുണയും പരിപാലനവും നൽകുന്നതിന് പ്രതിജ്ഞാബദ്ധരാണ്.'
    },
    {
        id:'parafive',
        englishContent:'Enjoy the convenience and sophistication of a fully integrated smart home that enhances your cinematic journey and transforms your living space into a technologically advanced sanctuary',
        malayalamContent:'നിങ്ങളുടെ സിനിമാറ്റിക് യാത്ര മെച്ചപ്പെടുത്തുകയും നിങ്ങളുടെ താമസസ്ഥലത്തെ സാങ്കേതികമായി പുരോഗമിച്ച സങ്കേതമാക്കി മാറ്റുകയും ചെയ്യുന്ന ഒരു സമ്പൂർണ്ണ സമന്വയിപ്പിച്ച സ്മാർട്ട് ഹോമിന്റെ സൗകര്യവും സങ്കീർണ്ണതയും ആസ്വദിക്കൂ'
    },
    {
        id:'qstn1',
        englishContent:'What are the minimum space requirements for setting up a home theater?',
        malayalamContent:'ഒരു ഹോം തിയേറ്റർ സ്ഥാപിക്കുന്നതിനുള്ള ഏറ്റവും കുറഞ്ഞ സ്ഥല ആവശ്യകതകൾ എന്തൊക്കെയാണ്?'
    },
    {
        id:'ansr1',
        englishContent:'To ensure an optimal home theater experience, it is recommended to have a minimum space of 10 feet in width and 12 feet in length. This allows for comfortable seating arrangements, proper placement of audiovisual equipment, and optimal viewing angles.',
        malayalamContent:'ഒപ്റ്റിമൽ ഹോം തിയറ്റർ അനുഭവം ഉറപ്പാക്കാൻ, കുറഞ്ഞത് 10 അടി വീതിയും 12 അടി നീളവും ഉണ്ടായിരിക്കാൻ ശുപാർശ ചെയ്യുന്നു. സുഖപ്രദമായ ഇരിപ്പിട ക്രമീകരണങ്ങൾ, ഓഡിയോവിഷ്വൽ ഉപകരണങ്ങളുടെ ശരിയായ സ്ഥാനം, ഒപ്റ്റിമൽ വ്യൂവിംഗ് ആംഗിളുകൾ എന്നിവ ഇത് അനുവദിക്കുന്നു.'
    },
    {
        id:'qstn2',
        englishContent:'Can Royal Cinemas customize the home theater setup according to my preferences?',
        malayalamContent:'എന്റെ മുൻഗണനകൾക്കനുസരിച്ച് ഹോം തിയറ്റർ സജ്ജീകരണം റോയൽ സിനിമാസിന് ഇഷ്ടാനുസൃതമാക്കാനാകുമോ?'
    },
    {
        id:'ansr2',
        englishContent:' Yes, We offer customizable options for your home theater setup. We can work with you to design a system that meets your specific needs and preferences.',
        malayalamContent:'അതെ, നിങ്ങളുടെ ഹോം തിയറ്റർ സജ്ജീകരണത്തിനായി ഞങ്ങൾ ഇഷ്ടാനുസൃതമാക്കാവുന്ന ഓപ്ഷനുകൾ വാഗ്ദാനം ചെയ്യുന്നു. നിങ്ങളുടെ പ്രത്യേക ആവശ്യങ്ങളും മുൻഗണനകളും നിറവേറ്റുന്ന ഒരു സിസ്റ്റം രൂപകൽപന ചെയ്യാൻ ഞങ്ങൾക്ക് നിങ്ങളോടൊപ്പം പ്രവർത്തിക്കാൻ കഴിയും.'
    },
    {
      id:'qstn3',
      englishContent:' How long does the home theater setup process take?',
      malayalamContent:'ഹോം തിയറ്റർ സജ്ജീകരണ പ്രക്രിയയ്ക്ക് എത്ര സമയമെടുക്കും?'
    },
    {
        id:'ansr3',
        englishContent:' The duration of the home theater setup process can vary depending on the complexity of the project and the size of the space. Typically, it takes around 2-3 weeks from initial consultation to complete installation.',
        malayalamContent:'പ്രോജക്റ്റിന്റെ സങ്കീർണ്ണതയും സ്ഥലത്തിന്റെ വലുപ്പവും അനുസരിച്ച് ഹോം തിയേറ്റർ സജ്ജീകരണ പ്രക്രിയയുടെ ദൈർഘ്യം വ്യത്യാസപ്പെടാം. സാധാരണഗതിയിൽ, പ്രാഥമിക കൂടിയാലോചന മുതൽ ഇൻസ്റ്റാളേഷൻ പൂർത്തിയാക്കാൻ ഏകദേശം 2-3 ആഴ്ച എടുക്കും.'
    },
    {
        id:'qstn4',
        englishContent:'Does Royal Cinemas provide a warranty for their home theater setups?',
        malayalamContent:'റോയൽ സിനിമാസ് അവരുടെ ഹോം തിയറ്റർ സജ്ജീകരണങ്ങൾക്ക് വാറന്റി നൽകുന്നുണ്ടോ?'
    },
    {
        id:'ansr4',
        englishContent:' Yes, We offer a warranty on our home theater setups to ensure customer satisfaction and provide support in case of any issues.',
        malayalamContent:'അതെ, ഉപഭോക്തൃ സംതൃപ്തി ഉറപ്പാക്കാനും എന്തെങ്കിലും പ്രശ്‌നങ്ങൾ ഉണ്ടായാൽ പിന്തുണ നൽകാനും ഞങ്ങളുടെ ഹോം തിയറ്റർ സജ്ജീകരണങ്ങൾക്ക് ഞങ്ങൾ ഒരു വാറന്റി വാഗ്ദാനം ചെയ്യുന്നു.'
    },
{
    id:'qstn5',
    englishContent:' What is the minimum budget required for a home theater setup by Royal Cinemas?',
    malayalamContent:'റോയൽ സിനിമാസിന്റെ ഹോം തിയറ്റർ സജ്ജീകരണത്തിന് ആവശ്യമായ ഏറ്റവും കുറഞ്ഞ ബജറ്റ് എന്താണ്?'
},
{
    id:'ansr5',
    englishContent:'The minimum budget required for a home theater setup by Royal Cinemas depends on various factors, such as the size of the room, equipment choices, and customization options. It is best to contact Royal Cinemas for a personalized quote based on your specific requirements.',
    malayalamContent:'റോയൽ സിനിമാസിന്റെ ഹോം തിയറ്റർ സജ്ജീകരണത്തിന് ആവശ്യമായ ഏറ്റവും കുറഞ്ഞ ബജറ്റ് മുറിയുടെ വലുപ്പം, ഉപകരണങ്ങളുടെ തിരഞ്ഞെടുപ്പുകൾ, ഇഷ്‌ടാനുസൃതമാക്കൽ ഓപ്ഷനുകൾ എന്നിങ്ങനെ വിവിധ ഘടകങ്ങളെ ആശ്രയിച്ചിരിക്കുന്നു. നിങ്ങളുടെ നിർദ്ദിഷ്ട ആവശ്യകതകളെ അടിസ്ഥാനമാക്കിയുള്ള ഒരു വ്യക്തിഗത ഉദ്ധരണിക്ക് റോയൽ സിനിമാസുമായി ബന്ധപ്പെടുന്നതാണ് നല്ലത്.'
    },
    

  {
    id:'aboutsecond',
    englishContent:'your premier destination for transforming your home entertainment into an extraordinary cinematic journey. With an unwavering commitment to delivering unparalleled expertise and a personalized touch, we specialize in crafting bespoke home theater systems that harmoniously merge cutting-edge technology, luxurious comfort, and captivating style. Get ready to immerse yourself in a world of unparalleled visual and audio bliss as we bring the magic of the movies right to your doorstep.',
    malayalamContent:'നിങ്ങളുടെ വീട്ടിലെ വിനോദത്തെ അസാധാരണമായ ഒരു സിനിമാറ്റിക് യാത്രയാക്കി മാറ്റുന്നതിനുള്ള നിങ്ങളുടെ പ്രധാന ലക്ഷ്യസ്ഥാനം. സമാനതകളില്ലാത്ത വൈദഗ്ധ്യവും വ്യക്തിഗത സ്പർശനവും നൽകുന്നതിനുള്ള അചഞ്ചലമായ പ്രതിബദ്ധതയോടെ, അത്യാധുനിക സാങ്കേതികവിദ്യയും ആഡംബരപൂർണമായ സുഖസൗകര്യങ്ങളും ആകർഷകമായ ശൈലിയും സമന്വയിപ്പിച്ച് അനുയോജ്യമായ ഹോം തിയറ്റർ സംവിധാനങ്ങൾ തയ്യാറാക്കുന്നതിൽ ഞങ്ങൾ വൈദഗ്ദ്ധ്യം നേടിയിട്ടുണ്ട്. സിനിമകളുടെ മാസ്മരികത ഞങ്ങൾ നിങ്ങളുടെ വീട്ടുവാതിൽക്കൽ എത്തിക്കുമ്പോൾ സമാനതകളില്ലാത്ത ദൃശ്യ-ശ്രവ്യ ആനന്ദത്തിന്റെ ലോകത്ത് മുഴുകാൻ തയ്യാറാകൂ.'
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

