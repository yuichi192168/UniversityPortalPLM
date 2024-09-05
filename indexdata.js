//SAMPLE date format
const dateStart = "December 01, 2023";
const dateEnd = "January 31, 2024";

//Leave dateStart and dateEnd empty if not accepting new applicants
//const dateStart = "";
//const dateEnd = "";

/*
*/  

//ADVISORY DATA
const advisoriesData = [
	{
     "date": "April 25, 2024",
     "description": "Until April 30, 2024, applicants who have not received an email with their exam schedule can visit the PLM Admissions Office for additional information."
   },
	{
     "date": "February 08, 2024",
     "description": "All PLMAT applicants can now print the application form and upload the accomplished form through the portal. Kindly await for the schedule of your exam. <br><br><font color=red><b>Disclaimer:</b></font><b> Please be advised that the evaluation of application documents are still on-going.</b>"
   },
    {
     "date": "January 31, 2024",
     "description": "Please regularly monitor your account to view the status of your application."
   },
	{
     "date": "January 19, 2024",
     "description": "The deadline for applications to be considered for admission is <b>January 31, 2024</b>; however, the prerequisites (evaluation of requirements) will still be assessed until <b>April 30, 2024</b>."
   },
	{
     "date": "January 18, 2024",
     "description": "For those applicants who have not received an email confirmation, please click the <b>Help Desk</b> Tab in the upper right corner of the Admission Portal."
   },
   {
     "date": "December 01, 2023",
     "description": "Application for PLMAT 2024 is now open."
   }
  

];

//const advisoriesData = [
  
//];

//Content of About PLM Admission
const aboutPLMAdmission = `The Pamantasan ng Lungsod ng Maynila (PLM) will start accepting applications (on-line) for freshmen students (undergraduate programs) for Academic Year (AY) 2024-2025 starting December 01, 2023.
<br><br>
For AY 2024-2025, there will be an on-site PLM Admission Test (PLMAT). Minimum health protocols will be observed to ensure the safety of student-applicants. PLMAT is a 4-hour examination consisting of sub-tests in English, Science, Mathematics, Filipino and Abstract Reasoning. Passing the PLMAT is one of the requirements for admission to PLM. 
<br><br>
Applicants must prepare the scanned copy (PDF) of the following:
<br>
1. PSA Birth Certificate.
<br>
2. For Senior High School (SHS): Grade 11 Certificate of General Weighted Average (GWA).
<br>
3. For Alternative Learning System (ALS) completers and Accreditation & Equivalency (A&E) Passers: Certificate of Completion
<br>
`;
//Content of Who may apply
const whoMayApply = `<b> The student-applicant may apply provided that they comply with any of the following basic qualifications: </b>
<br>
<br>
1. Senior High School (SHS) student who is currently enrolled in Grade 12 Department of Education (DepEd) accredited senior high school with a grade 11 general weighted average (GWA) of 80 or above.<br><br>

2. Senior High School graduate from DepEd accredited senior high school with a grade 11 general weighted average (GWA) of 80 or above and <font color="red">has not taken any college or university units or programs during the application period.</font></b><br><br>

3. The applicant completed Alternative Learning System (ALS) and passed the Accreditation & Equivalency (A&E) as recommended for tertiary education and has not taken any college or university units/programs during the application period.<br><br>
`;
//Content of How to apply
const howToApply = `
<b>Application Process</b><br><br>
1.	<font color="red">Apply on-line</font> through the PLM Admission Portal. <br>
2.	Fill out the Application Form (<font color="red">online</font>).<br>
3.	Upload required application requirements (<font color="red">online</font>).<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.	PSA Birth Certificate<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.	Certificate of Grade 11 GWA (SHS) /Certificate of Completion (ALS)<br>
4.	<b><font color="red">Check email for the account credentials</font></b> after submitting the application successfully. Log in to PLM admission account on a regular basis to check the status of the application.<br>
5.	Upon evaluation of the information and requirements, <font color="red">print the Application Form.</font><br>
6.	Upload <font color="red">scanned-signed Application Form with ID picture</font> (2 x 2 colored with white background).<br>
7.	<font color="red">Monitor the status</font> of the Application Form at the PLM Admission Account.<br>
8.	Check email for the PLMAT examination schedule after the Application Form has been successfully evaluated.<br>
9.	<font color="red">Print</font> two (2) copies of the exam permit.<br>
10.	On the specified examination date, <font color="red">bring two (2) signed exam permits</font> with an ID picture (2x2 colored with white background) and the signed Application Form with ID picture (2x2 colored with white background).<br>
<br>`;
//Content of Programs in PLM
const programsInPLM = `
<b>College of Architecture and Urban Planning (CAUP)</b>
<br>
Bachelor of Science in Architecture (BS Arch)
<br>
<br>
<b>PLM Business School (PLMBS)</b>
<br>
Bachelor of Science in Accountancy (BSA)
<br>
Bachelor of Science in Business Administration major in Financial Management (BS BA-FM)
<br>
Bachelor of Science in Business Administration major in Marketing Management (BS BA-MM)
<br>
Bachelor of Science in Business Administration major in Business Economics (BS BA-BE)
<br>
Bachelor of Science in Entrepreneurship (BS Entrep)
<br>
Bachelor of Science in Hospitality Management (BS HM)
<br>
Bachelor of Science in Real Estate Management (BS REM)
<br>
Bachelor of Science in Tourism Management (BS TM)
<br>
<br>
<b>College of Engineering (CEng)</b>
<br>
Bachelor of Science in Chemical Engineering (BS CHE)
<br>
Bachelor of Science in Civil Engineering (BS CE)
<br>
Bachelor of Science in Computer Engineering (BS CpE)
<br>
Bachelor of Science in Electrical Engineering (BS EE)
<br>
Bachelor of Science in Electronics Engineering (BS ECE)
<br>
Bachelor of Science in Mechanical Engineering (BS ME)
<br>
Bachelor of Science in Manufacturing Engineering (BS MfgE)
<br>
Bachelor of Science in Computer Science (BS CS)
<br>
Bachelor of Science in Information Technology (BS IT)
<br>
<br>
<b>College of Humanities, Arts and Social Sciences (CHASS)</b>
<br>
Bachelor of Arts in Communication (BAC)
<br>
Bachelor of Arts in Communication Major in Public Relations (BAC-PR)
<br>
<br>
<b>College of Music (CMu)</b>
<br>
Bachelor of Music in Music Performance (BMMP)
<br>
<br>
<b>School of Social Work (SSW)</b>
<br>
Bachelor of Science in Social Work (BS SW)
<br>
<br>
<b>College of Nursing (CN)</b>
<br>
Bachelor of Science in Nursing (BSN)
<br>
<br>
<b>College of Physical Therapy (CPT)</b>
<br>
Bachelor of Science in Physical Therapy (BS PT)
<br>
<br>
<b>College of Science (CS)</b>
<br>
Bachelor of Science in Biology (BS Bio)
<br>
Bachelor of Science in Mathematics (BS Math)
<br>
Bachelor of Science in Chemistry (BS Chem)
<br>
Bachelor of Science in Psychology (BS Psy)
<br>
<br>
<b>College of Education (CED)</b>
<br>
Bachelor of Physical Education (BPEd)
<br>
Bachelor of Secondary Education with Specialization in English (BSEd-Eng)
<br>
Bachelor of Secondary Education with Specialization in Filipino (BSEd-Fil)
<br>
Bachelor of Secondary Education with Specialization in Mathematics (BSEd-Math)
<br>
Bachelor of Secondary Education with Specialization in Science (BSEd-Sci)
<br>
Bachelor of Secondary Education major in Social Studies (BSEd-SS)
<br>
<br>
<b>School of Government (SOG)</b>
<br>
Bachelor of Public Administration (BPA)`;