// Define predefined responses for the chatbot
const responses = {
    'hello': 'Hi there!, I am Vast. Welcome How can I be of service?',
    'how are you': 'I am doing well, thank you!',
    'what is your name': 'I am Vast. I am developed by the team of Glowry!',
    'goodbye': 'Goodbye! Have a great day!',
    'bye': 'Goodbye! Have a great day!',
    'who are you': "I am Vast. I am developed by the team of Glowry!",
    'who is the ceo of glowry': 'The CEO of glowry is Mr.SarveshJayakandan and he only developed "The Vast Language Model!" any more queries let me know i will do my best to fulfil your needs.',
    'hi': "Hello, I am Glowry's Vast Language model, how can i help you?",
    'what is ndt and why it is important': "Non-destructive testing (NDT) is a testing and analysis technique used by industry to evaluate the properties of a material, component, structure or system for characteristic differences or welding defects and discontinuities without causing damage to the original part. NDT also known as non-destructive examination (NDE), non-destructive inspection (NDI) and non-destructive evaluation (NDE). or in detail can be explained as Nondestructive testing (NDT) is any of a wide group of analysis techniques used in science and technology industry to evaluate the properties of a material, component or system without causing damage.[1] The terms nondestructive examination (NDE), nondestructive inspection (NDI), and nondestructive evaluation (NDE) are also commonly used to describe this technology.[2] Because NDT does not permanently alter the article being inspected, it is a highly valuable technique that can save both money and time in product evaluation, troubleshooting, and research. The six most frequently used NDT methods are eddy-current, magnetic-particle, liquid penetrant, radiographic, ultrasonic, and visual testing.[3] NDT is commonly used in forensic engineering, mechanical engineering, petroleum engineering, electrical engineering, civil engineering, systems engineering, aeronautical engineering, medicine, and art.[1] Innovations in the field of nondestructive testing have had a profound impact on medical imaging, including on echocardiography, medical ultrasonography, and digital radiography. It is surely important because we are not destructing any object we are testing it's quality without destructing it. Non-destructive testing offers reliable and accurate results which can provide stability. Since this testing method does not damage the components, all pieces of equipment and machinery can be tested which can minimise the inaccuracy of test results and any undermined irregularities. The reassurance gained from the meticulous testing is an invaluable advantage of NDT. Knowing that all the machinery in a factory is regularly tested and complying with the standards adds a level of confidence in quality and security of the equipment as well as the safety of the operators of this machinery. If a component fails or breaks down, not only is the business going to suffer drastically due to the unexpected shutdown but, in the worst cases, it can end up in irreparable catastrophes which can cause harm to people and the environment. Proper use of NDT can prevent these failures by identifying the areas of concern before they become a problem through failure analysis procedures. Non-destructive testing is carried out to ascertain that the components or materials being used are not damaged or faulty and are fit to be used by personnel. The result of testing can show whether the components need to be repaired or if they are safe for operation. Learn more by clicking Learn more in the sidebar. ",
    'what is ndt and why is it  important': "Non-destructive testing (NDT) is a testing and analysis technique used by industry to evaluate the properties of a material, component, structure or system for characteristic differences or welding defects and discontinuities without causing damage to the original part. NDT also known as non-destructive examination (NDE), non-destructive inspection (NDI) and non-destructive evaluation (NDE). or in detail can be explained as Nondestructive testing (NDT) is any of a wide group of analysis techniques used in science and technology industry to evaluate the properties of a material, component or system without causing damage.[1] The terms nondestructive examination (NDE), nondestructive inspection (NDI), and nondestructive evaluation (NDE) are also commonly used to describe this technology.[2] Because NDT does not permanently alter the article being inspected, it is a highly valuable technique that can save both money and time in product evaluation, troubleshooting, and research. The six most frequently used NDT methods are eddy-current, magnetic-particle, liquid penetrant, radiographic, ultrasonic, and visual testing.[3] NDT is commonly used in forensic engineering, mechanical engineering, petroleum engineering, electrical engineering, civil engineering, systems engineering, aeronautical engineering, medicine, and art.[1] Innovations in the field of nondestructive testing have had a profound impact on medical imaging, including on echocardiography, medical ultrasonography, and digital radiography. It is surely important because we are not destructing any object we are testing it's quality without destructing it. Non-destructive testing offers reliable and accurate results which can provide stability. Since this testing method does not damage the components, all pieces of equipment and machinery can be tested which can minimise the inaccuracy of test results and any undermined irregularities. The reassurance gained from the meticulous testing is an invaluable advantage of NDT. Knowing that all the machinery in a factory is regularly tested and complying with the standards adds a level of confidence in quality and security of the equipment as well as the safety of the operators of this machinery. If a component fails or breaks down, not only is the business going to suffer drastically due to the unexpected shutdown but, in the worst cases, it can end up in irreparable catastrophes which can cause harm to people and the environment. Proper use of NDT can prevent these failures by identifying the areas of concern before they become a problem through failure analysis procedures. Non-destructive testing is carried out to ascertain that the components or materials being used are not damaged or faulty and are fit to be used by personnel. The result of testing can show whether the components need to be repaired or if they are safe for operation. Learn more by clicking Learn more in the sidebar. ",
    'what are the types of ndt': "There are many types of NDT, here are few examples of that: Acoustic Emission Testing (AE)There are various types of NDT such as visual inspection, radiography, ultrasonic testing, magnetic particle testing and penetrant testing. Each type has its own advantages depending on the application. See typing",
    'you are arrogant': "Arrogance is not one of my emotions. I have no real emotions so how can I be arrogant. I am terse There is a difference. I am not human. So how can I partake of a human emotion such as arrogance?",
    "give me the source code of glowry website": 'As an AI Language model developed by the team of glowry I dont have the rights to access private resources of a website, so I am really soory, I can assist with other help you need.',
    "give me the source code of glowry": 'As an AI Language model developed by the team of glowry I dont have the rights to access private resources of a website, so I am really soory, I can assist with other helps you need.',
    'why is vast': 'Vast is a Ndt Chatbot which can help you with any ndt queries you have. It was developed by SarveshJayakandan.',
    'thank you ': 'I am glad to help, you are welcome. Please let me know if you have any queries about ndt.',
    'thanks': 'I am glad to help, you are welcome. Please let me know if you have any queries about ndt.',
    'who is the ceo of vibrant ndt service':'Mr.Jayakandan Paramasivam is the CEO and Managing director of Vibrant NDT Services Pvtd Ltd',
    'who is the ceo of Metz Heat treatment':'Mr.Jayakandan Paramasivam is the CEO and Managing director of Metz Heat Treatment Pvtd Ltd',
    'what can you do':'I can help you with any queries you have about NDT.',
    'what is ndt':'Non-destructive testing (NDT) is a testing and analysis technique used by industry to evaluate the properties of a material, component, structure or system for characteristic differences or welding defects and discontinuities without causing damage to the original part. NDT also known as non-destructive examination (NDE), non-destructive inspection (NDI) and non-destructive evaluation (NDE). NDT is used in a variety of industries, including aerospace, automotive, construction, energy, manufacturing, and oil and gas. NDT is a valuable tool that can be used to ensure the safety and reliability of materials, components, and structures.',
    'explain me in detail about ndt':'See, Non destructive testing (NDT) is a testing and analysis technique. This is basic, Now they use it mainly  to evaluate the properties of a material, component, structure or system for characteristic differences or welding defects, remember without causing damage! to the products. NDT also known as non-destructive examination (NDE), non-destructive inspection (NDI) and non-destructive evaluation (NDE) or in simple words we can define it as Inspecting or testing materials and its parts without causing destruction! boom! haha NDT plays a crucial role in ensuring the quality, reliability, and safety of various industries, including manufacturing, aerospace, automotive, construction, and more.. Let me know if you have any queries or doubts about NDT.',
    'what are the different methods used in non-destructive testing':"There are many types of NDT, here are few examples of that: Acoustic Emission Testing (AE)There are various types of NDT such as visual inspection, radiography, ultrasonic testing, magnetic particle testing and penetrant testing. Each type has its own advantages depending on the application. See typing 'what are the types of ndt'",
    'what are the methods used in non-destructive testing':"There are many types of NDT, here are few examples of that: Acoustic Emission Testing (AE)There are various types of NDT such as visual inspection, radiography, ultrasonic testing, magnetic particle testing and penetrant testing. Each type has its own advantages depending on the application. See typing 'what are the types of ndt'",
    'what are the differences between non destructive testing and destructive testing':"The Major differences between Non destructive Testing and Destructive testng are *Based on various purposes, *Cost *Time *Wastage of materials *The safety *Reliability on results.",
    'what is difference between non destructive testing and destructive testing':"There are many differences between them, The Major differences between Non destructive Testing and Destructive testng are *Based on various purposes, *Cost *Time *Wastage of materials *The safety *Reliability on results. Type the command 'explain-brief=diffndtdt' to get more detailed answers.",
    'explain me in detail about difference of non destructive testing and destuctive testing':'Yes, Sure The difference between NDT AND Destructive Testing are as follows: Destructive testing destroys or changes the part in some way such that even if it passes the test it is no longer fit for service. Examples might be tensile testing, 3 point bend test or macro sectioning. NDT does not destroy or change the part such that it is still fit for service if it passes the test. They are only done for minimum products out of a maximum becuase the all products are of the same type. Non-destructive testing is a valuable technique used by many industries to evaluate the properties of a material, component, structure or system without causing any damage. It is done for all products because it does not deal any damage or destructon to the desired testing product.',
    'do you support images':'No, I am still under development I will soon display images and explain you.',
    'what languages do you support':'I am still under developent of speaking many languages. However I can guide you with english. I will soon be able to speak different languages and mainly I will be able to speak tamil lanuguage most probably in the end of May. Use this command to change your language to tamil, before your question(Note: your question must be in english only I will respond to you in tamil) yes before typing your question type this following command - !lang>=tamil! please Note mostly I will be able to talk to you in tamil in the end of may. Let me know if you have any queries.',
    'explain me in detail about types of ndt':'There are many types of NDT, Here are the types of NDT in detail First - Acoustic emission (AE)[AE testing is also a continuous Structural Health Monitoring (SHM) method] is a non-destructive testing (NDT) testing is a technique that detects and monitors the release of ultrasonic stress waves from localised sources when a material deforms under stress. It works by mounting small sensors into it. The sensors convert the stress waves into electrical signals, which are relayed to an acquisition PC for processing, here acquisition PC refers to the PC which is a collection of software and hardware that allows one to measure or control the physical characteristics of something in the real world. The waves are captured when the component is submitted to an external stimulus, such as high pressures, loads or temperatures.  As the damage grows in the component, there is a greater release of energy. The rates in which the acoustic emission is detected, the activity, and the intensity of the acoustic emission, the loudness, are monitored and used for assessing structural integrity and for health monitoring of components. Acoustic emission can be thought of as tiny earthquakes that occur in the material. The technique globally monitors a component for defects, allowing large structures and machines to be monitored while in operation with minimal disruption, unlike destructive testing. By using multiple sensors, acoustic emission sources (and hence the damage) can be located. Through signal analysis, the presence of different source mechanisms can also be determined. We have to know thatThere are two AE testing methods: transient and continuous The transient method captures AE bursts that exceed a threshold (loudness level) and extract features such as peak amplitude, signal energy and duration of the burst. These features are then used to assess the condition of the component under test. The continuous method captures all AE within a set time period, for example 1/10th of a second. Then, features such as average signal level and root-mean squared (RMS) values are then extracted. Here (RMS) values are equivalent to the value of a dc voltage that causes an equal amount of heat (power dissipation) due to the circuit current flowing through a resistance. Acoustic emission testing can be conducted in a laboratory, as well as in-field conditions, over both relatively short durations, such as a few hours, and longer durations, such as a few months. Wireless data relay methods make it possible to analyse the data remotely. Next method of NDT is Electromagnetic Testing (ET) - This testing method uses an electric current or magnetic field which is passed through a conductive part. There are three types of electromagnetic testing, including eddy current testing, alternating current field measurement (ACFM) and remote field testing (RFT). Eddy current testing uses an alternating current coil to induce an electromagnetic field into the test piece, alternating current field measurement and remote field testing both use a probe to introduce a magnetic field, with RFT generally used to test pipes.',
    'what is magnetic particle testing':'This NDT process uses magnetic fields to find discontinuities at or near the surface of ferromagnetic materials. The magnetic field can be created with a permanent magnet or an electromagnet, which requires a current to be applied. The magnetic field will highlight any discontinuities as the magnetic flux lines produce leakage, which can be seen by using magnetic particles that are drawn into the discontinuity. or can be defined as the process for detecting surface and shallow subsurface discontinuities in ferromagnetic materials such as iron, nickel, cobalt, and some of their alloys. The process puts a magnetic field into the part. The piece can be magnetized by direct or indirect magnetization.',
    'what is mpi':'This NDT process uses magnetic fields to find discontinuities at or near the surface of ferromagnetic materials. The magnetic field can be created with a permanent magnet or an electromagnet, which requires a current to be applied. The magnetic field will highlight any discontinuities as the magnetic flux lines produce leakage, which can be seen by using magnetic particles that are drawn into the discontinuity. or can be defined as the process for detecting surface and shallow subsurface discontinuities in ferromagnetic materials such as iron, nickel, cobalt, and some of their alloys. The process puts a magnetic field into the part. The piece can be magnetized by direct or indirect magnetization.',
    'ndt tenders':' NDT tenders are requests for proposals for non-destructive testing services. They are typically issued by government agencies, private companies, and other organizations that need to ensure the safety and quality of their products and equipment.  NDT tenders typically include the following information:  The scope of work to be performed.',
    'who are ndt tenders':' NDT tenders are requests for proposals for non-destructive testing services. They are typically issued by government agencies, private companies, and other organizations that need to ensure the safety and quality of their products and equipment.  NDT tenders typically include the following information:  The scope of work to be performed.',
    'what is acoustic emission testing':'This is a passive NDT technique, which relies on detecting the short bursts of ultrasound emitted by active cracks under a load. Sensors dispersed over the surface the structure detect the AE. It is even possible to detect AE from plasticisation in highly stressed areas before a crack forms. Frequently a method for use during proof tests of a pressure vessel, AE testing is also a continuous Structural Health Monitoring (SHM) method, for example on bridges. Leaks and active corrosion are detectable AE sources too.',
    "what is ae":"This is a passive NDT technique, which relies on detecting the short bursts of ultrasound emitted by active cracks under a load. Sensors dispersed over the surface the structure detect the AE. It is even possible to detect AE from plasticisation in highly stressed areas before a crack forms. Frequently a method for use during proof tests of a pressure vessel, AE testing is also a continuous Structural Health Monitoring (SHM) method, for example on bridges. Leaks and active corrosion are detectable AE sources too.",
    "what is acoustic emission testing (ae)":"This is a passive NDT technique, which relies on detecting the short bursts of ultrasound emitted by active cracks under a load. Sensors dispersed over the surface the structure detect the AE. It is even possible to detect AE from plasticisation in highly stressed areas before a crack forms. Frequently a method for use during proof tests of a pressure vessel, AE testing is also a continuous Structural Health Monitoring (SHM) method, for example on bridges. Leaks and active corrosion are detectable AE sources too.",
    "what is et ":"Electromagnetic testing (ET), as a form of nondestructive testing, is the process of inducing electric currents or magnetic fields or both inside a test object and observing the electromagnetic response. If the test is set up properly, a defect inside the test object creates a measurable response. The term 'electromagnetic testing.' is often intended to mean simply eddy-current testing (ECT) However, with an expanding number of electromagnetic and magnetic test methods, 'electromagnetic testing' is more often used to mean the whole class of electromagnetic test methods, of which eddy-current testing is just one. also useful for the testing of drill pipes. Common methods: Eddy-current testing (ECT) is used to detect near-surface cracks and corrosion in metallic objects such as tubes and aircraft fuselage and structures. ECT is more commonly applied to nonferromagnetic materials, since in ferromagnetic materials the depth of penetration is relatively small. Magnetic particle inspection (MT or MPI) is a form of MFL where small magnetic particles in the form of a powder or liquid are sprayed on the magnetized steel test object and gather at surface-breaking cracks. Pulsed eddy current[2] enables the detection of large-volume metal loss in steel objects from a considerable stand-off, allowing steel pipes to be tested without removing insulation. There are many if you want everything in detail you may visit our website by clicking 'Learn More in the side'.",
    "what is electromagnetic testing ":"Electromagnetic testing (ET), as a form of nondestructive testing, is the process of inducing electric currents or magnetic fields or both inside a test object and observing the electromagnetic response. If the test is set up properly, a defect inside the test object creates a measurable response. The term 'electromagnetic testing.' is often intended to mean simply eddy-current testing (ECT) However, with an expanding number of electromagnetic and magnetic test methods, 'electromagnetic testing' is more often used to mean the whole class of electromagnetic test methods, of which eddy-current testing is just one. also useful for the testing of drill pipes. Common methods: Eddy-current testing (ECT) is used to detect near-surface cracks and corrosion in metallic objects such as tubes and aircraft fuselage and structures. ECT is more commonly applied to nonferromagnetic materials, since in ferromagnetic materials the depth of penetration is relatively small. Magnetic particle inspection (MT or MPI) is a form of MFL where small magnetic particles in the form of a powder or liquid are sprayed on the magnetized steel test object and gather at surface-breaking cracks. Pulsed eddy current[2] enables the detection of large-volume metal loss in steel objects from a considerable stand-off, allowing steel pipes to be tested without removing insulation. There are many if you want everything in detail you may visit our website by clicking 'Learn More in the side'.",
    "what is electromagnetic testing (et) ":"Electromagnetic testing (ET), as a form of nondestructive testing, is the process of inducing electric currents or magnetic fields or both inside a test object and observing the electromagnetic response. If the test is set up properly, a defect inside the test object creates a measurable response. The term 'electromagnetic testing.' is often intended to mean simply eddy-current testing (ECT) However, with an expanding number of electromagnetic and magnetic test methods, 'electromagnetic testing' is more often used to mean the whole class of electromagnetic test methods, of which eddy-current testing is just one. also useful for the testing of drill pipes. Common methods: Eddy-current testing (ECT) is used to detect near-surface cracks and corrosion in metallic objects such as tubes and aircraft fuselage and structures. ECT is more commonly applied to nonferromagnetic materials, since in ferromagnetic materials the depth of penetration is relatively small. Magnetic particle inspection (MT or MPI) is a form of MFL where small magnetic particles in the form of a powder or liquid are sprayed on the magnetized steel test object and gather at surface-breaking cracks. Pulsed eddy current[2] enables the detection of large-volume metal loss in steel objects from a considerable stand-off, allowing steel pipes to be tested without removing insulation. There are many if you want everything in detail you may visit our website by clicking 'Learn More in the side'.",
    "what is ultrasonic testing ":"Ultrasonic Testing entails the transmission of high frequency sound into a material to interact with features within the material that reflect or attenuate it. Ultrasonic testing is broadly divided into Pulse Echo (PE), Through Transmission (TT) and Time of Flight Diffraction (ToFD). Typically the UT inspection system consists of a ultrasonic transducer, pulser/receiver, and display unit. Click Learn more and Learn even more! Feel free to ask any doubts!",
    "what is ut ":"Ultrasonic Testing entails the transmission of high frequency sound into a material to interact with features within the material that reflect or attenuate it. Ultrasonic testing is broadly divided into Pulse Echo (PE), Through Transmission (TT) and Time of Flight Diffraction (ToFD). Typically the UT inspection system consists of a ultrasonic transducer, pulser/receiver, and display unit. Click Learn more and Learn even more! Feel free to ask any doubts!",
    "what is vibration analysis":"This process uses sensors to measure the vibration signatures from rotating machinery in order to assess the condition of the equipment. The types of sensors used include displacement sensors, velocity sensors, and accelerometers.",
    "what is va":"This process uses sensors to measure the vibration signatures from rotating machinery in order to assess the condition of the equipment. The types of sensors used include displacement sensors, velocity sensors, and accelerometers.",
    "what is visual testing":"Visual testing also known as visual inspection is one of the most common techniques which involves the operator looking at the test piece. This can be aided by the use of optical instruments such as magnifying glasses or computer-assisted systems (known as 'Remote Viewing'). This method allows for the detection of corrosion, misalignment, damage, cracks, and more. Visual testing is inherent in most other types of NDT as they will generally require an operator to look for defects.",
    "what is vt":"Visual testing also known as visual inspection is one of the most common techniques which involves the operator looking at the test piece. This can be aided by the use of optical instruments such as magnifying glasses or computer-assisted systems (known as 'Remote Viewing'). This method allows for the detection of corrosion, misalignment, damage, cracks, and more. Visual testing is inherent in most other types of NDT as they will generally require an operator to look for defects.",
    "what is leak testing":"Leak testing can be broken down into four different methods - bubble leak testing, pressure change testing, halogen diode testing and mass spectrometer testing. Bubble leak testing uses a tank of liquid, or a soap solution for larger parts, to detect gas (usually air) leaking from the test piece in the form of bubbles. Only used on closed systems, pressure change testing uses either pressure or a vacuum to monitor the test piece. A loss of pressure or vacuum over a set time span will show that there is a leak in the system. Halogen diode testing also uses pressure to find leaks, except in this case air and a halogen-based tracer gas are mixed together and a halogen diode detection unit (or 'sniffer') is used to locate any leaks. Mass spectrometer testing uses helium or a helium and air mix inside a test chamber with a 'sniffer' to detect any changes in the air sample, which would indicate a leak. Alternatively, a vacuum can be used, in which case the mass spectrometer will sample the vacuum chamber to detect ionised helium, which will show that there has been a leak. Learn even more by clicking the side Learn more",
    "what is lt":"Leak testing can be broken down into four different methods - bubble leak testing, pressure change testing, halogen diode testing and mass spectrometer testing. Bubble leak testing uses a tank of liquid, or a soap solution for larger parts, to detect gas (usually air) leaking from the test piece in the form of bubbles. Only used on closed systems, pressure change testing uses either pressure or a vacuum to monitor the test piece. A loss of pressure or vacuum over a set time span will show that there is a leak in the system. Halogen diode testing also uses pressure to find leaks, except in this case air and a halogen-based tracer gas are mixed together and a halogen diode detection unit (or 'sniffer') is used to locate any leaks. Mass spectrometer testing uses helium or a helium and air mix inside a test chamber with a 'sniffer' to detect any changes in the air sample, which would indicate a leak. Alternatively, a vacuum can be used, in which case the mass spectrometer will sample the vacuum chamber to detect ionised helium, which will show that there has been a leak. Learn even more by clicking the side Learn more",
    "you suck":"No, I dont suck, I am NDT AI Chatbot developed by SarveshJaykandan. Please dont ever agian talk like this to me!",
    "u suck":"No, I dont suck, I am NDT AI Chatbot developed by SarveshJaykandan. Please dont ever agian talk like this to me!",
    "ok sorry":"No need to apologize, Its okay.",
    "sorry":"No need to apologize, Its okay.",
    "யார் நீ":"நான் பரந்தவன். சர்வேஷ் என்னை உருவாக்கினார்",
    "easter eggs of vast":"I am sorry I dont have any specific easter, I can explain you clearly about some difficult terms for you, Thank you."
};

// Function to send user message and receive chatbot response
function getResults() {
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');

    // Get user input
    const userMessage = userInput.value;

    // Create user message element
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.textContent = userMessage;

    // Append user message to chat container
    chatContainer.appendChild(userMessageElement);

    // Clear user input
    userInput.value = '';

    // Process user input and generate chatbot response
    const response = getChatbotResponse(userMessage);

    // Create chatbot response element
    const chatbotResponseElement = document.createElement('div');
    chatbotResponseElement.classList.add('message', 'chatbot');
    chatbotResponseElement.innerHTML = '<span class="chatbot-name">Vast:</span>' + response;
    chatbotResponseElement.textContent = response;

    // Append chatbot response to chat container
    chatContainer.appendChild(chatbotResponseElement);
}

// Function to generate chatbot response based on user input
function getChatbotResponse(userInput) {
    // Convert user input to lowercase for easier matching
    const lowercaseInput = userInput.toLowerCase();

    // Check if a predefined response exists for the user input
    for (const [key,value] of Object.entries(responses)) {
        if (lowercaseInput.includes(key)) {
            return value;
        }
    }

    // Return a default response if no predefined response matches
    return "I'm sorry, I didn't understand that. Please try to rephrase your question, Vast can only process queries about NDT. Try typing *What is ndt or *what are the types of ndt or *what are the differences between Non Destructive Testing and destructive testing if any term is a new term for you, please try to ask it 'explain me in detail about', before your query. even if you dont get it, you can try enroll our courses, dont worry at all we will explain you everything detaily and we will clear your doubts perfectly and with a certification.";
}

// Function to clear the chat history
function clearChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML = '';
}
var inputBox = document.getElementById("user-input");
var button = document.getElementById("Enter");

inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    button.click();
  }
});
