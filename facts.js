var r_text = new Array ();
r_text[0] = "PLM is the first tertiary institution to have a Filipino official name.";
r_text[1] = "Students who live in Manila receives 1,000 monthly (SAP).";
r_text[2] = "PLM Students are called PLMayers or Haribons.";
r_text[3] = "PLM is open for all students even those outside Manila!";
r_text[4] = "The university colors are golden-yellow, flaming-red and light-blue.";
r_text[5] = "PLM stands on historic grounds. On its site once stood the Universidad de San Ignacio (1590-1798), Universidad Maximo de San Ignacio, Colegio de San Jose, and Ateneo de Municipal de Manila (1865-1901).";
r_text[6] = `The passage of R.A. 4196 or "An Act Authorizing the City of Manila to Establish and Operate the University of City Manila" falls on the same day as national hero Dr. Jose Rizal's birthday.`;
r_text[7] = "The PLM  core values principles are Karunungan, Kaunlaran and Kadakilaan.";
r_text[8] = `Undergraduate students do not pay tuition at PLM. PLM offers tuition-free education to undergraduate students pursuant to the Republic Act 10931 or "Universal Access to Quality Tertiary Education".`;
var i = Math.floor(12*Math.random())
document.getElementById("facts").innerHTML = r_text[i];