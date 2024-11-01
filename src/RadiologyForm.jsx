// import { CHAT_BOT } from "../constants";

const RadiologyForm = () => {
  const InputField = ({ label, type = "text", className = "" }) => (
    <div className={`flex items-center ${className} `}>
      <label className="block text-nowrap">{label}</label>
      <input
        type="text"
        className="border-none w-[90%] h-5 mx-2 bg-[#ffe7d1]"
      />
    </div>
  );

  const CheckboxField = ({ label, isChecked = false }) => (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-1 bg-[#fce0c6]"
        checked={isChecked}
      />
      <label className="text-xs ">{label}</label>
    </div>
  );
  const DateField = ({ label, className = "" }) => (
    <div className={`flex items-center ${className} `}>
      <label className="block text-nowrap">{label}</label>
      <input type="date" className="border-none mx-2 h-5 bg-[#ffe7d1]" />
    </div>
  );

  return (
    <div className="bg-[#bfd3ed] p-4 max-w-4xl mx-auto font-sans text-smi">
      <div className="bg-[#006cb7] text-white p-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">MEDICAL IMAGING REQUEST</h1>
        {/* <div className="flex flex-row items-center">
          <img src={CHAT_BOT} className="h-8" />
          <p>Queensland Government Logo</p>
        </div> */}
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <div className="text-left">
            <p className="font-bold">Royal Brisbane and Women's Hospital</p>
            <p>Level 3, Ned Hanlon Building, Herston 4029</p>
            <p>Phone: 3646 2606 Fax: 3646 5379</p>
          </div>
          <div>
            <p>Metro North Hospital and Health Service</p>
            <button className="m-2 border-[2px] border-black bg-[#8d918d] w-[40%] h-[50%]">
              Print Form
            </button>
          </div>
        </div>

        <p className="text-smi mt-2 w-full text-center ">
          Patient information sheets available at
          www.qheps.health.qld.gov.au/consent
        </p>

        <div className="grid grid-cols-2 gap-2 mt-1">
          <div>
            <div className="bg-white p-2 pr-3">
              <div className="mb-1 flex flex-row items-baseline text-ms">
                <InputField label={"UR"} />
                <CheckboxField label={"Female"} />
                <CheckboxField label={"Male"} />
                <CheckboxField label={"Intermediate"} />
              </div>
              <InputField label={"Family Name"} />
              <InputField label={"Given Names"} />
              <DateField label={"DOB"}  />
              <InputField label={"Home address"} />
              <InputField label={"Phone Nos"} />
            </div>
          

          <div className="bg-white">
            <div className="mt-2 p-1">
              <h2 className="font-bold text-left">Imaging Requested</h2>
              <textarea className="border bg-[#ffe7d1] w-full h-24"></textarea>
            </div>
          </div>

          <div className="bg-white p-[2px] mt-2">
            <div className="mt-2">
              <div className="flex flex-rol">
                <h2 className="font-bold">The aim of this imaging is to<p className="pl-1 text-sm font-regular">(tick one and explain)</p></h2>
                
              </div>

              <div className="flex space-x-4">
                <CheckboxField label={"Confirm"} />
                <CheckboxField label={"Exclude"} />
                <CheckboxField label={"Define"} />
                <CheckboxField label={"Progress of"} />
              </div>
              <textarea className="border w-full h-24 mt-2 bg-[#ffe7d1]"></textarea>
            </div>
          </div>
        </div>
       

        <div>
          <div className="bg-white">
          <div className="grid grid-cols-2 p-1 mx-2 ">
            <CheckboxField label={"Inpatient"} />
            <InputField label={"Ward"} />
            <CheckboxField label={"Mobile"} />
            <InputField label={"Bed No"} />
            <CheckboxField label={"Outpatient"} />
            <InputField label={"Clinic"} />
            <CheckboxField label={"Private"} />
            <InputField label={"Attn Dr"} />
            <CheckboxField label={"Bulk Bill"} />
          </div></div>

          <div className="flex flex-row jus mx-0 ">
            
            <div className="p-2 bg-white my-2 w-[53%]">
              <CheckboxField label={"Routine"} />
              <CheckboxField label={"Urgent"} />
              <DateField label={"Date Req. by"} className="text-xs" />
            </div>
            <div className=" bg-white p-1 text-left w-[45%] my-2 justify-end">
              <p className="text-sm">Duty Radiologist - 73834</p>
              <p className="text-sm">Women's Imaging - 68844</p>
              <p className="text-sm">DEM After Hours - 67883</p>
            </div>
          </div>

          <div className="bg-[#bfd3ed] h-2" />

          <div className="bg-[#ffff94] p-2 ">
            <div className="items-center flex flex-col">
              <h2 className="font-bold">
                RADIOLOGY
                <br /> FINAL CHECK
              </h2>
              <div>
                <CheckboxField label={"Patient identification verified"} />
                <CheckboxField label={"Procedure & consent verified"} />
                <CheckboxField label={"Correct side & site verified"} />
                <CheckboxField label={"Correct patient data & side markers"} />
              </div>
            </div>
            <div className="mt-2">
              <label className="block">
                Radiographer/Team Leader Signature
              </label>
              <input type="text" className="border w-full" />
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className="mt-4">
          <h2 className="font-bold">
            Clinical Details (include relevant surgery, imaging and pathology
            results)
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <label className="flex items-center">
              Pregnant? <input type="checkbox" className="ml-1" /> Yes{" "}
              <input type="checkbox" className="ml-1" /> No
            </label>
            <label className="flex items-center">
              Infectious? <input type="checkbox" className="ml-1" /> Yes{" "}
              <input type="checkbox" className="ml-1" /> No
            </label>
            <label className="flex items-center">
              Allergies? <input type="checkbox" className="ml-1" /> Yes{" "}
              <input type="checkbox" className="ml-1" /> No
            </label>
          </div>
          <div className="mt-2">
            <label className="block">Specify</label>
            <input type="text" className="border w-full" />
          </div>
          <textarea className="border w-full h-24 mt-2"></textarea>
        </div>

        <div className="mt-4">
          <h2 className="font-bold">
            Risk factors for CT, MRI, IVP, Angiography
          </h2>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Nil
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> &gt; 70 years
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Hx renal insufficiency
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Diabetic
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> On Metformin
            </label>
          </div>
          <div className="mt-2">
            <p>If yes to any of the above please complete</p>
            <div className="flex space-x-4">
              <div>
                <label className="block">Creatinine</label>
                <input type="text" className="border w-24" />
              </div>
              <div>
                <label className="block">eGFR</label>
                <input type="text" className="border w-24" />
              </div>
              <div>
                <label className="block">Date</label>
                <input type="date" className="border" />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Previous reaction to
              contrast
            </label>
            <label className="block mt-1">Details</label>
            <textarea className="border w-full h-16"></textarea>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-bold">Obligatory MRI questionnaire</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Aneurysm clip",
              "Embolisation coils",
              "Inner ear implant",
              "Neuro/biostimulator",
              "Heart surgery",
              "Prosthetic cardiac valves",
              "Cardiac pacemaker/wires",
              "Vena cava filter",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <div>
                  <label className="inline-flex items-center mr-2">
                    <input type="checkbox" className="mr-1" /> Yes
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-1" /> No
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              "Programmable shunt",
              "Metal prosthesis",
              "Penetrating eye injury ever",
              "Stent",
              "Requires sedation/pain relief",
              "Requires GA",
              "Claustrophobia",
              "Able to lie flat",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <div>
                  <label className="inline-flex items-center mr-2">
                    <input type="checkbox" className="mr-1" /> Yes
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-1" /> No
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="font-bold">
            Declaration: I have assessed the above risks to the patient for this
            examination
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block">Requested by:</label>
            <input type="text" className="border w-full" />
          </div>
          <div>
            <label className="block">Consultant Name</label>
            <input type="text" className="border w-full" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block">Signature:</label>
            <input type="text" className="border w-full" />
          </div>
          <div>
            <label className="block">Pager/Phone:</label>
            <input type="text" className="border w-full" />
          </div>
          <div>
            <label className="block">Date</label>
            <input type="date" className="border w-full" />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs">
            Notice to the patient: For Medicare eligible examinations only. Your
            referrer has recommended that you use Queensland Health.
          </p>
          <p className="text-xs">
            You may choose another provider but please discuss this with your
            referrer first.
          </p>
        </div>

        <div className="mt-4 text-right text-xs">
          <p>Version No: 3.1 Effective date: 05/2016 Review date: 05/2017</p>
        </div>
      </div>
  );
};

export default RadiologyForm;
