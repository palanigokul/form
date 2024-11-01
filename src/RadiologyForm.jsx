// import { CHAT_BOT } from "../constants";

const RadiologyForm = () => {
  const InputField = ({ label, type = "text", className = "" }) => (
    <div className={`flex items-center ${className} `}>
      <label className="block text-nowrap">{label}</label>
      <input
        type="text"
        className="border-b-black w-full border-2 border-dotted border-x-0 border-t-0 h-5 mx-2 bg-[#ffe7d1]"
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
            <div className="flex justify-end m-0 p-0"><button className="m-2 border-[2px] border-black p-2 bg-[#8d918d] w-[40%] h-[50%]">
              Print Form
            </button></div>
          </div>
        </div>

        <p className="text-smi mt-2 w-full text-center ">
          Patient information sheets available at
          www.qheps.health.qld.gov.au/consent
        </p>

        <div className="flex flex-row gap-2 mt-1">
          <div className="w-[55%]">
            <div className="bg-white p-2 pr-3 h-[39%]">
              <div className="mb-1 flex flex-row items-baseline text-ms">
                <InputField label={"UR"} />
                <CheckboxField label={"Female"} />
                <CheckboxField label={"Male"} />
                <CheckboxField label={"Intermediate"} />
              </div>
              <InputField label={"Family Name"} />
              <InputField label={"Given Names"} />
              <DateField label={"DOB"} />
              <InputField label={"Home address"} />
              <InputField label={"Phone Nos"} />
            </div>

            <div className="bg-white h-[24%]">
              <div className="mt-2 p-1 h-[92%]">
                <h2 className="font-bold text-left">Imaging Requested</h2>
                <textarea className="border bg-[#ffe7d1] w-full h-[80%]"></textarea>
              </div>
            </div>

            <div className="bg-white p-1 mt-2 h-[35%]">
              <div className="mt-2 ">
                <div className="flex gap-0 h-[15%] ">
                  <p className="font-bold text-left">
                    The aim of this imaging is to &nbsp;
                  </p>
                  <p className="pl-1 text-sm font-regular">
                    (tick one and explain)
                  </p>
                </div>

                <div className="flex space-x-4 h-[15%]">
                  <CheckboxField label={"Confirm"} />
                  <CheckboxField label={"Exclude"} />
                  <CheckboxField label={"Define"} />
                  <CheckboxField label={"Progress of"} />
                </div>
                <textarea className="border w-[100%] h-[80px] mt-2  bg-[#ffe7d1]"></textarea>
              </div>
            </div>
          </div>

          <div className="w-[45%]">
            <div className="bg-white h-[29%]">
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
              </div>
            </div>

            <div className="flex flex-row gap-2 jus mx-0 h-[28%]">
              <div className="p-2 bg-white my-2 w-[55%]">
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

            {/* <div className="bg-[#bfd3ed] h-2" /> */}

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
                  <CheckboxField
                    label={"Correct patient data & side markers"}
                  />
                </div>
              </div>
              <div className="mt-2 h-full">
                <p className="block">
                  Radiographer/Team Leader 
                </p>
                <div className="flex">
                 <label>Signature</label><input type="text" className="w-full border-b-black border-2 border-dotted bg-transparent border-x-0 border-t-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-white p-1 mx-2">
        <div className="flex flex-row">
          <p className="font-bold text-left">Clinical Details &nbsp;</p>
          <p className=" font-regular text-left ">
            (include relevant surgery, imaging and pathology results)
          </p>
        </div>
        <div className="flex flex-row justify-evenly ">
          <div className="flex flex-col text-left w-[30%]">
            <label className="flex justify-evenly">
              Pregnant? <input type="checkbox" className="ml-1" /> Yes{" "}
              <input type="checkbox" className="ml-1" /> No
            </label>
            <label className="flex justify-evenly">
              Infectious? <input type="checkbox" className="ml-1" /> Yes{" "}
              <input type="checkbox" className="ml-1" /> No
            </label>
            <label className="flex justify-evenly">
              Allergies? <input type="checkbox" className="ml-1" /> Yes{" "}
              <input type="checkbox" className="ml-1" /> No
            </label>
            <div className="mt-2 text-left">
              <label>Specify</label>
              <input
                type="text"
                className="border-b-black border-2 border-dotted w-[95%] border-x-0 border-t-0"
              />
            </div>
          </div>
          <textarea className="border w-[70%] h-fill bg-[#ffe7d1] mt-2"></textarea>
        </div>
      </div>

      <div className="m-2 flex gap-1 justify-evenly">
        <div className="bg-white w-[60%] p-1">
          <div className="flex">
            <p className="text-left">Risk factors for &nbsp;</p>
            <h2 className="font-bold">CT, MRI, IVP, Angiography</h2>
          </div>
          <div className="flex justify-evenly space-x-4">
            <label>
              <input type="checkbox" className="mr-1"/> Nil
            </label>
            <div>
              <h2 className="font-bold">or</h2>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" /> &gt; 70 years
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" /> Diabetic
              </label>
            </div>
            <div>
              {" "}
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" /> Hx renal
                insufficiency
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" /> On Metformin
              </label>
            </div>
          </div>
          <div className="mt-2 mb-0">
            <p>If yes to any of the above please complete</p>
            <div className="flex gap-1 justify-end h-fit">
              <div className="flex ">
                <label className="h-[25px]">Creatinine &nbsp;</label>
                <input type="text" className="border-b-black border-2 border-dotted w-[95%] border-x-0 border-t-0 h-[25px]" />
              </div>
              <div className="flex">
                <label >eGFR&nbsp;</label>
                <input type="text" className="border-b-black border-2 border-dotted w-[95%] border-x-0 border-t-0 h-[25px]" />
              </div>
              <div className="flex">
                <label >Date&nbsp;</label>
                <input type="date" className="bborder-b-black border-2 border-dotted w-[95%] border-x-0 border-t-0 h-[25px]" />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[40%] p-1 bg-white">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" /> Previous reaction to
            contrast
          </label>
          <label className="block mt-1 text-left">Details</label>
          <textarea className="w-full border-b-black border-2 border-dotted bg-[#ffe7d1] h-20"></textarea>
        </div>
      </div>

      <div className="flex m-2 gap-2">
        <div className="w-[72%]">
          <div className="bg-white gap-2 p-1">
            <div className="flex ">
              <p className="text-left">Obligatory &nbsp;</p>{" "}
              <h2 className="font-bold">MRI&nbsp;</h2>
              <p> questionnaire</p>
            </div>
            <div className="flex gap-11 text-sm">
              <div className="w-[49%]">
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
              <div className="w-[49%]">
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
          </div>

          <div className=" bg-white">
            <div className="mt-3  ">
              <p className="font-bold">
                Declaration: I have assessed the above risks to the patient for
                this examination
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 p-1">
              <div>
                <label className="flex">Requested by:</label>
                <input type="text" className="border-b-black w-full border-2 border-dotted bg-transparent border-x-0 border-t-0" />
              </div>
              <div>
                <label className="flex">Consultant Name</label>
                <input type="text" className="border-b-black w-full border-2 border-dotted bg-transparent border-x-0 border-t-0" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 p-1">
              <div>
                <label className="flex">Signature:</label>
                <input type="text" className="border-b-black w-full border-2 border-dotted bg-transparent border-x-0 border-t-0" />
              </div>
              <div>
                <label className="flex">Pager/Phone:</label>
                <input type="text" className="border-b-black w-full border-2 border-dotted bg-transparent border-x-0 border-t-0" />
              </div>
              <div>
                <label className="flex">Date</label>
                <input type="date" className="border-b-black w-full border-2 border-dotted bg-transparent border-x-0 border-t-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#edf1f8] flex justify-between flex-col w-[28%] p-1">
          <div><label className="text-left text-blue-600">Radiologist Protocol/Initial <input className="border-b-black w-full border-2 border-dotted bg-transparent border-x-0 border-t-0" /></label>
          <div className="flex justify-between m-1"> 
            <CheckboxField label={"Today"} />
            <CheckboxField label={"Next 2 days"} />
            <CheckboxField label={"Next 5 days"} />
          </div></div>
          <label className="text-blue-600 text-left">Radiographers Comments </label>
          <div className="flex flex-col pb-2 text-blue-600 text-left">
            <label>
              Time{" "}
              <input className="border-b-blue-300 border-2 border-dotted bg-transparent border-x-0 border-t-0" />
            </label>
            <label>
              Date{" "}
              <input className="border-b-blue-300 border-2 border-dotted bg-transparent border-x-0 border-t-0" />
            </label>
            <label>
              Room
              <input className="border-b-blue-300 border-2 border-dotted bg-transparent border-x-0 border-t-0 w-[80%] " />
            </label>
            <label>
              Initials{" "}
              <input className="border-b-blue-300 border-2 border-dotted bg-transparent border-x-0 border-t-0 w-[77%] " />
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-0 m-2">
        <div className=" w-[60%]">
        <p className="text-xs text-left">
          Notice to the patient: For Medicare eligible examinations only. Your
          referrer has recommended that you use Queensland Health.
          You may choose another provider but please discuss this with your
          referrer first.
        </p>
      </div>

      <div className="mt-4 text-left text-[11.5px] w-[40%] justify-center font-bold">
        <p>Version No: 3.1 Effective date: 05/2016 Review date: 05/2017</p>
      </div></div>
    </div>
  );
};

export default RadiologyForm;
