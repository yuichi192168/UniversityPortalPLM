var advisoryContainer = document.getElementById("advisory-container");
var dateStartEnd = document.getElementById("date-start-end");
var plmCollapsible1 = document.getElementById("collapsibleContent1");
var plmCollapsible2 = document.getElementById("collapsibleContent2");
var plmCollapsible3 = document.getElementById("collapsibleContent3");
var plmCollapsible4 = document.getElementById("collapsibleContent4");

function generateAdvisories(){
  var newAdvisory;
  if(advisoriesData.length != 0)
  {
    advisoriesData.forEach((e) => {
      newAdvisory = `<div class="g-0 advisories-content">
      <p><b>` + e.date + `</b></p>
      <p>` + e.description + `</p>
      </div>`;
      advisoryContainer.innerHTML += newAdvisory;
    });
  }
  else
  {
    newAdvisory = `<div class="g-0 advisories-content">
    <p><b><center>THERE ARE NO ADVISORIES AT THIS TIME</center></b></p>
    </div>`;
    advisoryContainer.innerHTML = newAdvisory;
  }
}

function getDateStartEnd()
{
  if(dateStart.length != 0 && dateEnd.length != 0)
    dateStartEnd.innerHTML = `<b>Start of Application:</b> ` + dateStart + ` <br><b>End of Application:</b> ` + dateEnd;
  else
    dateStartEnd.innerHTML = `PLM is not yet accepting new applicants at this time`;
}

function generateCollapsibles()
{
  plmCollapsible1.innerHTML = aboutPLMAdmission;
  plmCollapsible2.innerHTML = whoMayApply;
  plmCollapsible3.innerHTML = howToApply;
  plmCollapsible4.innerHTML = programsInPLM;
}