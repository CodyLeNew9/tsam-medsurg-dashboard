import React, { useState } from 'react';

const TSAMDashboard = () => {
  // State for tracking orientation progress
  const [currentTier, setCurrentTier] = useState(1);
  const [completedObjectives, setCompletedObjectives] = useState({});
  const [precepteeName, setPrecepteeName] = useState('');
  const [preceptorName, setPreceptorName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [experienceLog, setExperienceLog] = useState([]);
  const [newExperience, setNewExperience] = useState({
    category: '',
    skill: '',
    date: '',
    description: '',
    preceptorInitials: ''
  });

  // TSAM tiers data
  const tiersData = [
    {
      tier: 1,
      title: "Observation and Basic Understanding",
      responsibilities: "Shadow and observe the preceptor.",
      objectives: [
        "Observes how the professional nurse communicates with patients and families.",
        "Observes how the professional nurse prioritizes conflicting priorities while striving to meet patient needs.",
        "Observes how the professional nurse collaborates with the multidisciplinary team, placing the patient at the center of care.",
        "Performs infection prevention practices according to organizational expectations (e.g., handwashing, gloving, gowning).",
        "Observes basic nursing procedures (e.g., bed making, patient hygiene, mobility assistance).",
        "Understands hospital-specific policies on patient privacy (HIPAA), emergency procedures (e.g., fire, code blue), and incident reporting.",
        "Observes the use of electronic health records (EHR) for documentation and order entry.",
        "Identifies key hospital resources (e.g., pharmacy, lab, dietary) and their roles in patient care."
      ]
    },
    {
      tier: 2,
      title: "Assessments, Vital Signs, and Documentation",
      responsibilities: "Perform assessments, vital signs, and intake/output (I&O) documentation.",
      objectives: [
        "Reviews, synthesizes, and validates vital signs and I&Os.",
        "Demonstrates individualized patient assessments based on diagnosis, comorbidities, and provider orders.",
        "Reviews \"required shift\" documentation and completes as applicable.",
        "Demonstrates knowledge of due times for assessments, vital signs, blood sugars, I&Os, etc.",
        "Performs pain reassessments, vital sign re-checks, and blood glucoses on time, accurately, and without prompting.",
        "Conducts an accurate physical assessment of a full patient load.",
        "Accurately recognizes abnormal portions of a physical assessment and documents them appropriately.",
        "Performs focused assessments for common Med/Surg conditions (e.g., respiratory assessment for COPD, cardiac assessment for heart failure).",
        "Demonstrates proper use of assessment tools (e.g., Braden Scale for skin, Morse Fall Scale).",
        "Navigates the EHR to document assessments, vital signs, and I&Os accurately.",
        "Understands and applies basic documentation standards, including legal and ethical considerations."
      ]
    },
    {
      tier: 3,
      title: "Medication Administration, Order Review, and Handoffs",
      responsibilities: "Perform assessments, vital signs, I&O documentation + administer medications (all routes), review orders, and conduct handoffs.",
      objectives: [
        "Demonstrates safe medication management, including the 5 rights, medication reconciliation, and event reporting.",
        "Identifies role in reducing patient harm associated with anticoagulation therapy.",
        "Identifies when a medication or solution needs to be labeled.",
        "Demonstrates use of barcode and 2-patient identifiers 100% of the time.",
        "Locates medication resources (e.g., Micromedex, pharmacy extension).",
        "Processes provider orders, acknowledges new orders, and follows them accurately.",
        "Performs Bedside Shift Report involving the patient and/or family.",
        "Utilizes pain management resources and scales for assessment/reassessment.",
        "Conducts proper pre- and post-assessments for medication administration.",
        "Identifies workflow and protocol for insulin administration.",
        "Describes management of patients on opioids, including reassessments and side effects.",
        "Successfully co-signs for medication administration or waste.",
        "Hangs IV piggybacks (IVPBs) accurately and monitors appropriately.",
        "Identifies proper blood administration protocol and monitoring.",
        "Understands Step One medications and protocols.",
        "Identifies when to initiate the Potassium protocol.",
        "Calculates and administers IV medications, including drip rates and compatibility checks.",
        "Demonstrates safe handling and documentation of controlled substances.",
        "Administers medications via various routes (e.g., oral, IV, IM, subcutaneous, topical).",
        "Conducts medication reconciliation during patient admission and discharge."
      ]
    },
    {
      tier: 4,
      title: "Treatments, Delegation, Patient Education, and Safety",
      responsibilities: "Perform assessments, vital signs, I&O documentation + administer medications, review orders, conduct handoffs + perform treatments, delegate appropriately, educate patients, manage admissions/discharge planning, ensure safety, and communicate with providers using SBAR.",
      objectives: [
        "Maintains the patient care plan in MedHost, updating and resolving care plans each shift.",
        "Identifies resources for patient education related to care, treatment, and services.",
        "Completes the admission process with minimal assistance.",
        "Locates and utilizes Lippincott Procedures to guide practice.",
        "Completes purposeful intentional rounding.",
        "Demonstrates appropriate prioritization.",
        "Supports a minimal lift culture by using safe patient handling equipment.",
        "Provides care for patients with mental health, substance abuse, or suicide attempt conditions.",
        "Identifies de-escalation tactics for aggressive/violent patients and escalates appropriately.",
        "Discusses resources for skin and wound management, including pressure injuries.",
        "Completes a discharge to home self-care with minimal assistance.",
        "Demonstrates communication with providers using SBAR format.",
        "Appropriately delegates tasks to CNAs.",
        "Performs basic wound care, including dressing changes and assessment of wound healing.",
        "Educates patients on common post-surgical care (e.g., incision care, activity restrictions).",
        "Educates patients on chronic disease management (e.g., diabetes, hypertension).",
        "Demonstrates proper use of restraints and alternatives, following hospital policy.",
        "Identifies and mitigates fall risks, implementing prevention strategies.",
        "Manages patients with indwelling catheters, including insertion and removal (if within scope)."
      ]
    },
    {
      tier: 5,
      title: "Complex Care Coordination and Dismissals",
      responsibilities: "Perform assessments, vital signs, I&O documentation + administer medications, review orders, conduct handoffs + perform treatments, delegate, educate patients, manage admissions/discharge planning, ensure safety, communicate with providers + coordinate care for complex/high-acuity patients, manage complex dismissals, transfers, and referrals.",
      objectives: [
        "Manages care for patients with complex needs (e.g., multiple services, care conferences).",
        "Demonstrates the process for handling critical test results.",
        "Collaborates with Case Management for post-hospital care needs.",
        "Completes a discharge with a post-hospital referral (e.g., SNF, assisted living) with minimal assistance.",
        "Activates documentation pathways in MedHost for pre- and post-discharge care needs.",
        "Demonstrates alarm management, including purpose, limits, and adjustments.",
        "Participates in multidisciplinary/patient care rounds at the bedside.",
        "Trends patient data, recognizes deterioration, and notifies providers or Emergency Response Team.",
        "Coordinates care for patients with multiple comorbidities, involving specialists as needed.",
        "Prepares patients for transfers to higher levels of care or rehabilitation facilities.",
        "Manages patients on telemetry, interpreting basic rhythms and responding to alarms.",
        "Demonstrates understanding of sepsis protocols and early intervention.",
        "Participates in family meetings or care conferences for complex patients.",
        "Utilizes telemedicine for remote consultations, if applicable."
      ]
    },
    {
      tier: 6,
      title: "Independent Practice",
      responsibilities: "Manage all care independently, with the preceptor shadowing.",
      objectives: [
        "Manages complex patient needs independently, without prompting.",
        "Demonstrates handling of difficult conversations (e.g., hospice, end-of-life, suicide).",
        "Collaborates with the interdisciplinary team without prompting.",
        "Preceptor shadows the preceptee without intervening or prompting.",
        "Demonstrates how to escalate patient safety issues through the chain of command.",
        "Independently manages a full patient load, prioritizing care and handling emergencies.",
        "Precepts or mentors junior staff or nursing students (if applicable).",
        "Demonstrates time management and organizational skills for efficient shift management.",
        "Reflects on practice, identifying areas for improvement and seeking feedback."
      ]
    }
  ];

  // Experience categories
  const experienceCategories = [
    {
      name: "Procedural Skills",
      skills: [
        "Inserting Foley catheters",
        "Inserting nasogastric (NG) tubes",
        "Starting IVs",
        "Performing venipuncture for lab draws",
        "Administering blood products",
        "Managing central lines (if applicable)",
        "Performing ECGs",
        "Assisting with bedside procedures (e.g., chest tube insertion, paracentesis)"
      ]
    },
    {
      name: "Patient Situations",
      skills: [
        "Managing sepsis",
        "Caring for patients with diabetic ketoacidosis (DKA)",
        "Handling post-operative complications (e.g., hemorrhage, infection)",
        "Managing respiratory distress (e.g., COPD exacerbation, pneumonia)",
        "Caring for patients with acute coronary syndrome",
        "Managing patients with stroke symptoms",
        "Handling gastrointestinal bleeding",
        "Caring for patients with renal failure"
      ]
    },
    {
      name: "Interprofessional Collaboration",
      skills: [
        "Working with physical therapy for patient mobility",
        "Collaborating with dietary for specialized nutrition plans",
        "Coordinating with social work for discharge planning",
        "Consulting with pharmacy for medication management",
        "Engaging with respiratory therapy for ventilator or oxygen management"
      ]
    },
    {
      name: "Emergency Responses",
      skills: [
        "Participating in code blue (cardiac arrest)",
        "Assisting in rapid response situations",
        "Managing anaphylactic reactions",
        "Responding to patient falls",
        "Handling fire or evacuation procedures"
      ]
    },
    {
      name: "Rural-Specific Skills",
      skills: [
        "Performing basic respiratory therapy techniques (e.g., nebulizer treatments, incentive spirometry)",
        "Assisting with simple suturing or wound closure (if within scope)",
        "Managing patients awaiting transfer to higher levels of care",
        "Utilizing telemedicine for specialist consultations"
      ]
    }
  ];

  // Calculate overall progress
  const calculateTierProgress = (tier: number) => {
    const tierObjectives = tiersData[tier - 1].objectives;
    const completedCount = tierObjectives.filter(obj => 
      completedObjectives[`tier${tier}-${tierObjectives.indexOf(obj)}`]
    ).length;
    return (completedCount / tierObjectives.length) * 100;
  };

  const calculateOverallProgress = () => {
    let totalObjectives = 0;
    let totalCompleted = 0;
    
    tiersData.forEach(tierData => {
      const tierNum = tierData.tier;
      tierData.objectives.forEach((obj, idx) => {
        totalObjectives++;
        if (completedObjectives[`tier${tierNum}-${idx}`]) {
          totalCompleted++;
        }
      });
    });
    
    return (totalCompleted / totalObjectives) * 100;
  };

  // Toggle objective completion
  const toggleObjective = (tierNum, objIndex) => {
    const key = `tier${tierNum}-${objIndex}`;
    setCompletedObjectives({
      ...completedObjectives,
      [key]: !completedObjectives[key]
    });
  };

  // Check if all objectives in a tier are completed
  const isTierCompleted = (tierNum) => {
    const tierObjectives = tiersData[tierNum - 1].objectives;
    return tierObjectives.every((obj, idx) => 
      completedObjectives[`tier${tierNum}-${idx}`]
    );
  };

  // Add a new experience to the log
  const addExperience = () => {
    if (newExperience.category && newExperience.skill && newExperience.date && newExperience.description && newExperience.preceptorInitials) {
      setExperienceLog([...experienceLog, {...newExperience, id: Date.now()}]);
      setNewExperience({
        category: '',
        skill: '',
        date: '',
        description: '',
        preceptorInitials: ''
      });
    }
  };

  // Sign off on a tier
  const signOffTier = (tierNum) => {
    if (isTierCompleted(tierNum)) {
      if (tierNum < 6) {
        setCurrentTier(tierNum + 1);
      }
    }
  };

  return (
    <div className="flex flex-col p-4 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        TSAM Med/Surg RN Orientation Dashboard
      </h1>
      
      {/* Orientation Information */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Orientation Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preceptee Name</label>
            <input 
              type="text" 
              value={precepteeName}
              onChange={(e) => setPrecepteeName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter preceptee name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preceptor Name</label>
            <input 
              type="text" 
              value={preceptorName}
              onChange={(e) => setPreceptorName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter preceptor name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-end">
            <div className="w-full bg-gray-100 p-3 rounded">
              <p className="text-sm font-medium text-gray-800">Target Completion: {startDate ? new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 56)).toLocaleDateString() : '(8 weeks from start)'}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Overview */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Progress Overview</h2>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Overall Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full" 
              style={{width: `${calculateOverallProgress()}%`}}
            ></div>
          </div>
          <p className="text-xs text-right mt-1">{Math.round(calculateOverallProgress())}% Complete</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiersData.map(tier => (
            <div key={tier.tier} className="border rounded p-3">
              <p className={`text-sm font-medium ${currentTier === tier.tier ? 'text-blue-600' : 'text-gray-700'}`}>
                Tier {tier.tier}: {tier.title}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div 
                  className={`h-3 rounded-full ${isTierCompleted(tier.tier) ? 'bg-green-500' : 'bg-blue-400'}`} 
                  style={{width: `${calculateTierProgress(tier.tier)}%`}}
                ></div>
              </div>
              <p className="text-xs text-right mt-1">{Math.round(calculateTierProgress(tier.tier))}%</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Current Tier Details */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-blue-800">Current Tier: {currentTier}</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => currentTier > 1 && setCurrentTier(currentTier - 1)}
              disabled={currentTier === 1}
              className={`px-3 py-1 rounded ${currentTier === 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              Previous
            </button>
            <button 
              onClick={() => currentTier < 6 && setCurrentTier(currentTier + 1)}
              disabled={currentTier === 6}
              className={`px-3 py-1 rounded ${currentTier === 6 ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              Next
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-blue-900">{tiersData[currentTier - 1].title}</h3>
          <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Responsibilities:</span> {tiersData[currentTier - 1].responsibilities}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-md font-medium text-gray-700 mb-2">Objectives</h4>
          <div className="space-y-2">
            {tiersData[currentTier - 1].objectives.map((objective, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  checked={!!completedObjectives[`tier${currentTier}-${idx}`]} 
                  onChange={() => toggleObjective(currentTier, idx)}
                  className="mt-1"
                />
                <span className="text-sm text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <h4 className="text-md font-medium text-gray-700 mb-2">Sign-off</h4>
          <p className="text-sm text-gray-600 mb-3">
            Both preceptor and preceptee signatures indicate readiness to progress to the next tier, confirming all objectives are met.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-sm text-gray-600">Progress: {Math.round(calculateTierProgress(currentTier))}% Complete</div>
              <div className={`text-sm ${isTierCompleted(currentTier) ? 'text-green-600' : 'text-yellow-600'}`}>
                {isTierCompleted(currentTier) ? 'All objectives completed' : 'Not all objectives are completed'}
              </div>
            </div>
            
            <button 
              onClick={() => signOffTier(currentTier)}
              disabled={!isTierCompleted(currentTier)}
              className={`px-4 py-2 rounded font-medium ${isTierCompleted(currentTier) ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-500'}`}
            >
              {currentTier < 6 ? 'Complete & Progress to Next Tier' : 'Complete Orientation'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Experience Tracker */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Experience Tracker</h2>
        <p className="text-sm text-gray-600 mb-4">
          Track essential skills, procedures, and patient situations that are critical for a well-rounded Med/Surg RN.
        </p>
        
        {/* Add New Experience */}
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-md font-medium text-gray-700 mb-3">Add New Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                value={newExperience.category}
                onChange={(e) => setNewExperience({...newExperience, category: e.target.value, skill: ''})}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Category</option>
                {experienceCategories.map(category => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill/Procedure</label>
              <select 
                value={newExperience.skill}
                onChange={(e) => setNewExperience({...newExperience, skill: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded"
                disabled={!newExperience.category}
              >
                <option value="">Select Skill</option>
                {newExperience.category && experienceCategories.find(c => c.name === newExperience.category)?.skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="date" 
                value={newExperience.date}
                onChange={(e) => setNewExperience({...newExperience, date: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preceptor Initials</label>
              <input 
                type="text" 
                value={newExperience.preceptorInitials}
                onChange={(e) => setNewExperience({...newExperience, preceptorInitials: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter initials"
                maxLength={3}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              value={newExperience.description}
              onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="What was done, any challenges, outcomes"
              rows={3}
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={addExperience}
              disabled={!newExperience.category || !newExperience.skill || !newExperience.date || !newExperience.description || !newExperience.preceptorInitials}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add Experience
            </button>
          </div>
        </div>
        
        {/* Experience Log */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">Experience Log</h3>
          
          {experienceLog.length === 0 ? (
            <p className="text-sm text-gray-500 italic">No experiences logged yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill/Procedure</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preceptor</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {experienceLog.map(exp => (
                    <tr key={exp.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{exp.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{exp.skill}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(exp.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{exp.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exp.preceptorInitials}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Summary Report */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Orientation Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Tier Progress</h3>
            <div className="space-y-2">
              {tiersData.map(tier => (
                <div key={tier.tier} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tier {tier.tier}: {tier.title}</span>
                  <span className={`text-sm ${isTierCompleted(tier.tier) ? 'text-green-600' : 'text-blue-600'}`}>
                    {isTierCompleted(tier.tier) ? 'Completed' : `${Math.round(calculateTierProgress(tier.tier))}%`}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Experience Summary</h3>
            <div className="space-y-2">
              {experienceCategories.map(category => {
                const count = experienceLog.filter(exp => exp.category === category.name).length;
                const total = category.skills.length;
                return (
                  <div key={category.name} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{category.name}</span>
                    <span className="text-sm text-blue-600">{count} of {total} recorded</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-md font-medium text-gray-700">Overall Completion</h3>
              <p className="text-sm text-gray-600">
                {precepteeName ? precepteeName : 'Preceptee'} has completed {Math.round(calculateOverallProgress())}% of the TSAM orientation program.
              </p>
            </div>
            
            <div>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => alert('Report would be generated and downloaded')}
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TSAMDashboard;
