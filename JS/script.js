var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");
var Form4 = document.getElementById("form4");
var Form5 = document.getElementById("form5");
var Form6 = document.getElementById("form6");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var Next3 = document.getElementById("next3");
var Next4 = document.getElementById("next4");
var Next5 = document.getElementById("next5");
var Back1 = document.getElementById("back1");
var Back2 = document.getElementById("back2");
var Back3 = document.getElementById("back3");
var Back4 = document.getElementById("back4");


const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

const idFileInput = document.getElementById("id-file");
const bankStatementFileInput = document.getElementById("bank-statement-file");
const payslipFileInput = document.getElementById("recent-payslip-file");
const idStatus = document.getElementById("id-status");
const bankStatementStatus = document.getElementById("bank-statement-status");
const recentPayslipStatus = document.getElementById("recent-payslip-status");
const idUpload = document.getElementById("id-status-upload");
const bankStatementUpload = document.getElementById("bank-statement-status-upload");
const recentPayslipUpload = document.getElementById("recent-status-upload");
const submitButton = document.getElementById("submit-button");
const progressArea = document.querySelector(".progress-area");
const form = document.querySelectorAll(".document-row");
const gender = document.querySelectorAll(".radio-buttons");

let idUploaded = false;
let bankStatementUploaded = false;
let recentPayslipUploaded = false;

const provinceSelect = document.getElementById('provinceSelect');
const citySelect = document.getElementById('citySelect');
const postalCodeSelect = document.getElementById('postalCodeSelect');

const cities ={
  '':[''],
  'eastern-cape':['Select City','Alice','Butterworth','East London','Graaff-Reinet', 'Grahamstown',"King Williams Town","Mthatha","Port Elizabeth", "Queenstown", "Uitenhage","Zwelitsha"],
  'free-state':[ 'Select City',"Bethlehem","Bloemfontein","Jagersfontein","Kroonstad","Odendaalsrus","Parys","Phuthaditjhaba","Sasolburg","Virginia","Welkom"],
  'gauteng':['Select City',"Benoni", "Boksburg", "Brakpan", "Carletonville", "Germiston", "Johannesburg", "Krugersdorp", "Pretoria", "Randburg", "Randfontein", "Roodepoort", "Soweto", "Springs", "Vanderbijlpark", "Vereeniging"],
  'kwazulu-natal':['Select City',"Durban", "Empangeni", "Ladysmith", "Newcastle", "Pietermaritzburg", "Pinetown", "Ulundi", "Umlazi"],
  'limpopo':['Select City',"Giyani", "Lebowakgomo", "Musina", "Phalaborwa", "Polokwane","Tzaneen", "Thohoyandou", "Thabazimbi"],
  'mpumalanga':['Select City',"Emalahleni", "Nelspruit", "Secunda"],
  'north-west':['Select City',"Klerksdorp", "Mahikeng", "Mmabatho", "Potchefstroom", "Rustenburg"],
  'northern-cape':['Select City',"Kimberley", "Kuruman", "Port Nolloth"],
  'western-cape':['Select City',"Bellville", "Cape Town", "Constantia", "George", "Hopefield", "Oudtshoorn", "Paarl", "Simons Town", "Stellenbosch", "Swellendam", "Worcester"]

};

const postalCodes = {

'alice':['Select Code','5700'],

'butterworth':['Select Code','4960'],
'east london':['Select Code','5200','5201','5202','5203','5204','5205','5206','5207','5208','5210','5211','5212','5213','5214','5215','5216','5217','5218','5219','5220','5221','5222','5223','5224','5225','5226','5227','5228','5229','5230','5231','5232','5233','5234','5235','5236','5237','5238','5239','5240','5241','5242','5243','5244','5245','5246','5247','5248','5249','5250','5251','5252','5253','5254','5255','5256','5257','5258','5259','5260','5261','5262','5263','5264','5265','5266','5267','5268','5269','5270','5271','5272','5273','5274','5275','5276','5277','5278','5279','5280','5281','5282','5283','5284','5285','5286','5287','5288','5289','5290','5291','5292','5293','5294','5295','5296','5297','5298','5299'],
'graaff-reinet':['Select Code','6280','6281','6282','6283','6284','6285','6286','6287','6288','6289','6290','6291','6292','6293','6294','6295','6296','6297','6298','6299'],
'grahamstown':['Select Code','6140','6141','6142','6143','6144','6145','6146','6147','6148','6149'],
'king williams town':['Select Code','5600'],
'mthatha':['Select Code','5100'],
'port elizabeth':['Select Code','6000','6001','6002','6003','6004','6005','6006','6007','6008','6009','6010','6011','6012','6013','6014','6015','6016','6017','6018','6019','6020','6021','6022','6023','6024','6025','6026','6027','6028','6029','6030','6031','6032','6033','6034','6035','6036','6037','6038','6039','6040','6041','6042','6043','6044','6045','6046','6047','6048','6049','6050','6051','6052','6053','6054','6055','6056','6057','6058','6059','6060','6061','6062','6063','6064','6065','6066','6067','6068','6069','6070','6071','6072','6073','6074','6075','6076','6077','6078','6079','6080','6081','6082','6083','6084','6085','6086','6087','6088','6089','6090','6091','6092','6093','6094','6095','6096','6097','6098','6099'],
'queenstown':['Select Code','5320','5321','5322','5323','5324','5325','5326','5327','5328','5329','5330','5331','5332','5333','5334','5335','5336','5337','5338','5339','5340','5341','5342','5343','5344','5345','5346','5347','5348','5349'],
'uitenhage':['Select Code','6229','6230','6231','6232','6233','6234','6235','6236','6237','6238','6239','6240','6241','6242','6243','6244','6245','6246','6247','6248','6249','6250','6251','6252','6253','6254','6255','6256','6257','6258','6259','6260','6261','6262','6263','6264','6265','6266','6267','6268','6269','6270','6271','6272','6273','6274','6275','6276','6277','6278','6279'],
'zwelitsha':['Select Code','5608'],
'bethlehem':['Select Code','9700','9701','9702','9703','9704','9705','9706','9707','9708','9709','9710','9711','9712','9713','9714','9715','9716','9717','9718','9719','9720','9721','9722','9723','9724','9725','9726','9727','9728','9729','9730','9731','9732','9733','9734','9735','9736','9737','9738','9739','9740','9741','9742','9743','9744','9745','9746','9747','9748','9749','9750','9751','9752','9753','9754','9755','9756','9757','9758','9759','9760','9761','9762','9763','9764','9765','9766','9767','9768','9769','9770','9771','9772','9773','9774','9775','9776','9777','9778','9779','9780','9781','9782','9783','9784','9785','9786','9787','9788','9789','9790','9791','9792','9793','9794','9795','9796','9797','9798','9799'],
'bloemfontein':['Select Code','9300','9301','9302','9303','9304','9305','9306','9307','9308','9309','9310','9311','9312','9313','9314','9315','9316','9317','9318','9319','9320','9321','9322','9323','9324','9325','9326','9327','9328','9329','9330','9331','9332','9333','9334','9335','9336','9337','9338','9339','9340','9341','9342','9343','9344','9345','9346','9347','9348','9349','9350','9351','9352','9353','9354','9355','9356','9357','9358','9359','9360','9361','9362','9363','9364','9365','9366','9367','9368','9369','9370','9371','9372','9373','9374','9375','9376','9377','9378','9379','9380','9381','9382','9383','9384','9385','9386','9387','9388','9389','9390','9391','9392','9393','9394','9395','9396','9397','9398','9399'],
'jagersfontein':['Select Code','9974'],
'kroonstad':['Select Code','9500'],
'odendaalsrus':['Select Code','9480'],
'parys':['Select Code','9585'],
'phuthaditjhaba':['Select Code','9866'],
'sasolburg':['Select Code','9570'],
'virginia':['Select Code','9430'],
'welkom':['Select Code','9459'],
'benoni':['Select Code','1500','1501','1502','1503','1504','1505','1506','1512','1513','1514','1515','1516','1517','1518','1519','1520','1521','1522','1523','1524','1525','1991','1992','1993','1994','1995','1996','1997','1998','1999'],
'brakpan':['Select Code','1540', '1541', '1542', '1543', '1544', '1545', '1546', '1547', '1548', '1549'],
'boksburg':['Select Code','1459', '1460', '1461', '1462', '1463', '1464', '1465', '1466', '1467', '1468', '1469'],
'carletonville':['Select Code','2499', '2500', '2501', '2502', '2503', '2504', '2505', '2506', '2507', '2508', '2509'],
'germiston':['Select Code','1400', '1401', '1402', '1403', '1404', '1405', '1406', '1407', '1408', '1409', '1410'],
'johannesburg':['Select Code','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036','2037','2038','2039','2040','2041','2042','2043','2044','2045','2046','2047','2048','2049','2050','2051','2052','2053','2054','2055','2056','2057','2058','2059','2060','2061','2062','2063','2064','2065','2066','2067','2068','2069','2070','2071','2072','2073','2074','2075','2076','2077','2078','2079','2080','2081','2082','2083','2084','2085','2086','2087','2088','2089','2090','2091','2092','2093','2094','2095','2096','2097','2098','2099'],
'krugersdorp':['Select Code','1739','1740','1741','1742','1743','1744','1745','1746','1747','1748','1749','1750','1751','1752','1753','1754','1755','1756','1757','1758','1759','1760','1761','1762','1763','1764','1765','1766','1767','1768','1769','1770','1771','1772','1773','1774','1775','1776','1777','1778','1779','1780','1781','1782','1783','1784','1785','1786','1787','1788','1789','1790','1791','1792','1793','1794','1795','1796','1797','1798','1799'],
'pretoria':['Select Code','0001','0002','0010','0011','0012','0013','0014','0015','0016','0017','0018','0019','0020','0021','0022','0023','0024','0025','0026','0027','0028','0029','0030','0031','0032','0033','0034','0035','0036','0037','0038','0039','0040','0041','0042','0043','0044','0045','0046','0047','0048','0049','0050','0051','0052','0053','0054','0055','0056','0057','0058','0059','0060','0061','0062','0063','0064','0065','0066','0067','0068','0069','0070','0071','0072','0073','0074','0075','0076','0077','0078','0079','0080','0081','0082','0083','0084','0085','0086','0087','0088','0089','0090','0091','0092','0093','0094','0095','0096','0097','0098','0099','0100','0101','0102','0103','0104','0105','0106','0107','0108','0109','0110','0111','0112','0113','0114','0115','0116','0117','0118','0119','0120','0121','0122','0123','0124','0125','0126','0127','0128','0129','0130','0131','0132','0133','0134','0135','0136','0137','0138','0139','0140','0141','0142','0143','0144','0145','0146','0147','0148','0149','0150','0151','0152','0153','0154','0155','0156','0157','0158','0159','0160','0161','0162','0163','0164','0165','0166','0167','0168','0169','0170','0171','0172','0173','0174','0175','0176','0177','0178','0179','0180','0181','0182','0183','0184','0185','0186','0187','0188','0189'],
'randburg':['Select Code','2194','2195','2196','2197','2198'],
'randfontein':['Select Code','1760','1761','1762','1763','1764'],
'roodepoort':['Select Code','1725','1726','1727','1728','1729'],
'soweto':['Select Code','1868','1869','1870','1871','1872'],
'springs':['Select Code','1560','1561','1562','1563','1564'],
'vanderbijlpark':['Select Code','1911','1912','1913','1914','1915'],
'vereeniging':['Select Code','1939','1940','1941','1942','1943'],
'durban':['Select Code','4001','4002','4003','4004','4005'],
'empangeni':['Select Code','3880','3881','3882','3883','3884'],
'ladysmith':['Select Code','3370','3371','3372','3373','3374'],
'newcastle':['Select Code','2940','2941','2942','2943','2944'],
'pietermaritzburg':['Select Code','3200','3201','3202','3203','3204'],
'pinetown':['Select Code','3610','3611','3612','3613','3614'],
'ulundi':['Select Code','3838'],
'umlazi':['Select Code','4031','4032','4033','4034','4035'],
'giyani':['Select Code','0826'],
'lebowakgomo':['Select Code','0737'],
'musina':['Select Code','0900'],
'phalaborwa':['Select Code','1390'],
'polokwane':['Select Code','0700','0701','0702','0703','0704'],
'Tzaneen':['Select Code','0742'],
'Thohoyandou':['Select Code','0970'],
'thabazimbi':['Select Code','0387'],
'emalahleni':['Select Code','1035'],
'nelspruit':['Select Code','1200','1201','1202','1203','1204'],
'secunda':['Select Code','2302'],
'klerksdorp':['Select Code','2571','2572','2573','2574','2575'],
'mahikeng':['Select Code','2745'],
'mmabatho':['Select Code','2735'],
'potchefstroom':['Select Code','2531','2532','2533','2534','2535'],
'rustenburg':['Select Code','0300','0301','0302','0303','0304'],
'kimberley':['Select Code','8300','8301','8302','8303','8304'],
'kuruman':['Select Code','8460'],
'port nolloth':['Select Code','8280'],
'bellville':['Select Code','7530','7531','7532','7533','7534'],
'cape town':['Select Code','8001','8002','8003','8004','8005'],
'constantia':['Select Code','7806'],
'george':['Select Code','6529', '6530', '6531', '6532', '6533', '6534', '6535', '6536', '6537', '6538'],
'hopefield':['Select Code','7355'],
'oudtshoorn':['Select Code','6620','6625'],
'paarl':['Select Code','7646'],
'simons town':['Select Code','7995'],
'stellenbosch':['Select Code','7599','7600','7602'],
'swellendam':['Select Code','6740'],
'worcester':['Select Code','6850','6851','6849']
};

function populateCities(province){
  citySelect.innerHTML =''; //clear existing options
  const provinceCities = cities[province];

  if (provinceCities){
    provinceCities.forEach(city =>{
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

provinceSelect.addEventListener('change', function(){
  const selectedProvince = this.value;
  populateCities(selectedProvince);
});

populateCities(provinceSelect.value);

function populatePostalCodes(city){
  postalCodeSelect.innerHTML='';
  const formattedCity = city.toLowerCase();
  const cityCodes = postalCodes[formattedCity];

  if (cityCodes){
    cityCodes.forEach(postalCode =>{
      const option = document.createElement('option');
      option.value = postalCode;
      option.textContent = postalCode;
      postalCodeSelect.appendChild(option);
    });
  }
}

citySelect.addEventListener('change', function(){
  const selectedCity = this.value;
  populatePostalCodes(selectedCity);
});

populatePostalCodes(citySelect.value);

gender.forEach(input =>{
  input.addEventListener("change", () => {
    gender.forEach(i => {
        const imgLabel = i.nextElementSibling.querySelector("img");
        imgLabel.style.border = "none";
    });
    if (input.checked) {
        const imgLabel = input.nextElementSibling.querySelector("img");
        imgLabel.style.border = "2px solid red"; // Just for demonstration, you can change the border styling as needed
    }
  });
});


form.forEach(row => {
    row.addEventListener("click", () => {
        const fileInput = row.querySelector("input[type='file']");
        fileInput.click();
    });
});

idFileInput.addEventListener("change", (event) => {
    idUploaded = true;
    const file = event.target.files[0];
    if (file) {
        let fileName = file.name;
        if (fileName.length >= 12) {
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        idStatus.textContent = fileName;
        const fileSize = (file.size / 1024).toFixed(2); // Convert to KB with two decimal places
        const fileSizeText = fileSize + " KB";
        document.getElementById("id-size").textContent = fileSizeText; // Set size text
    }
    idUpload.innerHTML = "&#10004;";
    idStatus.classList.add("uploaded");
});

bankStatementFileInput.addEventListener("change", (event) => {
    bankStatementUploaded = true;
    const file = event.target.files[0];
    if (file) {
        let fileName = file.name;
        if (fileName.length >= 12) {
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        bankStatementStatus.textContent = fileName;
        const fileSize = (file.size / 1024).toFixed(2); // Convert to KB with two decimal places
        const fileSizeText = fileSize + " KB";
        document.getElementById("bank-statement-size").textContent = fileSizeText; // Set size text
    }
    bankStatementUpload.innerHTML= "&#10004;";
    bankStatementStatus.classList.add("uploaded");
});

payslipFileInput.addEventListener("change", (event) => {
    recentPayslipUploaded = true;
    const file = event.target.files[0];
    if (file) {
        let fileName = file.name;
        if (fileName.length >= 12) {
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        recentPayslipStatus.textContent = fileName;
        const fileSize = (file.size / 1024).toFixed(2); // Convert to KB with two decimal places
        const fileSizeText = fileSize + " KB";
        document.getElementById("payslip-size").textContent = fileSizeText; // Set size text
    }
    recentPayslipUpload.innerHTML= "&#10004;";
    recentPayslipStatus.classList.add("uploaded");
});



Next1.addEventListener("click", function(event){
  event.preventDefault();
  var gen=document.forms["myForm"]["gender"];
  if (gen[0].checked==false&&gen[1].checked==false){
    alert("please enter your gender");
  }else{
    Form1.style.left = "-3000px";
    Form2.style.left = "10px";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }

});
Next2.addEventListener("click", function(event){
  event.preventDefault();
  Form2.style.left = "-3000px";
  Form3.style.left = "10px";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
Next3.addEventListener("click", function(event){
  event.preventDefault();
  Form3.style.left = "-3000px";
  Form4.style.left = "10px";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
Next4.addEventListener("click", function(event){
  event.preventDefault();
  Form4.style.left = "-3000px";
  Form5.style.left = "10px";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
Next5.addEventListener("click", function(event){
  event.preventDefault();
  if (idUploaded && bankStatementUploaded && recentPayslipUploaded) {
      // Both files are uploaded, proceed with email sending
      progressArea.textContent = "Submitting Application..."; 
      setTimeout(() => {
       Form5.style.left = "-3000px";
       Form6.style.left = "10px";
       bullet[current - 1].classList.add("active");
       progressCheck[current - 1].classList.add("active");
       progressText[current - 1].classList.add("active");
       current += 1;
       bullet[current - 1].classList.add("active");
       progressCheck[current - 1].classList.add("active");
       progressText[current - 1].classList.add("active");
       current += 1;
    }, 2000);
  } else {
      alert("Please upload all documents before submitting.");
  }
});

Back1.addEventListener("click", function(event){
    event.preventDefault();
    Form1.style.left = "10px";
    Form2.style.left = "3000px";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  Back2.addEventListener("click", function(event){
    event.preventDefault();
    Form2.style.left = "10px";
    Form3.style.left = "3000px";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  Back3.addEventListener("click", function(event){
    event.preventDefault();
    Form3.style.left = "10px";
    Form4.style.left = "3000px";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  Back4.addEventListener("click", function(event){
    event.preventDefault();
    Form4.style.left = "10px";
    Form5.style.left = "3000px";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });


