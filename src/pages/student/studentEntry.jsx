import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function StudentEntry({ onSave }) {
  const [activeTab, setActiveTab] = useState("basic");

  const [form, setForm] = useState({
    StudentID: "",
    studentName: "",
    DOB: "",
    Age: "",
    Sex: "",
    F_Name: "",
    Relation: "",
    Occupation: "",
    City: "",
    State: "",
    Country: "",
    PINCode: "",
    Phone: "",
    Income: "",
    Status: "Active",
    Email: "",
    M_name: "",
    M_occupation: "",

    PersentAddress: "",
    perCity: "",
    perState: "",
    PerPIN: "",
    PerPhone: "",
    Percountry: "",
    Mobile: "",

    distID: "",
    CityID: "",
    RelegionID: "",
    QuotaId: "",
    PH: "",
    AadharNo: "",
    PassportNo: "",

    BloodGrp: "",
    Pan: "",
    ApaarID: "",
    BirthID: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-2xl">
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 md:p-6 shadow-lg">

        <h3 className="text-xl font-bold text-indigo-700 mb-4">
          Student Entry Form
        </h3>

        {/* ================= TABS ================= */}
        <div className="flex flex-wrap gap-2 mb-6">
          <TabButton
            active={activeTab === "basic"}
            onClick={() => setActiveTab("basic")}
            label="Basic Details"
          />
          <TabButton
            active={activeTab === "address"}
            onClick={() => setActiveTab("address")}
            label="Permanent Address"
          />
          <TabButton
            active={activeTab === "other"}
            onClick={() => setActiveTab("other")}
            label="Other Details"
          />
        </div>

        {/* ================= BASIC DETAILS ================= */}
        {activeTab === "basic" && (
          <Section title="Basic Details">
            <Row label="Student ID"><Input name="StudentID" value={form.StudentID} onChange={handleChange} /></Row>
            <Row label="Student Name"><Input name="studentName" value={form.studentName} onChange={handleChange} /></Row>
            <Row label="DOB"><Input type="date" name="DOB" value={form.DOB} onChange={handleChange} /></Row>
            <Row label="Age"><Input name="Age" value={form.Age} onChange={handleChange} /></Row>
            <Row label="Sex"><Select name="Sex" value={form.Sex} onChange={handleChange} options={["Male","Female","Other"]} /></Row>
            <Row label="Father Name"><Input name="F_Name" value={form.F_Name} onChange={handleChange} /></Row>
            <Row label="Relation"><Input name="Relation" value={form.Relation} onChange={handleChange} /></Row>
            <Row label="Occupation"><Input name="Occupation" value={form.Occupation} onChange={handleChange} /></Row>
            <Row label="City"><Input name="City" value={form.City} onChange={handleChange} /></Row>
            <Row label="State"><Input name="State" value={form.State} onChange={handleChange} /></Row>
            <Row label="Country"><Input name="Country" value={form.Country} onChange={handleChange} /></Row>
            <Row label="PIN Code"><Input name="PINCode" value={form.PINCode} onChange={handleChange} /></Row>
            <Row label="Phone"><Input name="Phone" value={form.Phone} onChange={handleChange} /></Row>
            <Row label="Income"><Input name="Income" value={form.Income} onChange={handleChange} /></Row>
            <Row label="Status"><Select name="Status" value={form.Status} onChange={handleChange} options={["Active","Inactive"]} /></Row>
            <Row label="Email"><Input name="Email" value={form.Email} onChange={handleChange} /></Row>
            <Row label="Mother Name"><Input name="M_name" value={form.M_name} onChange={handleChange} /></Row>
            <Row label="Mother Occupation"><Input name="M_occupation" value={form.M_occupation} onChange={handleChange} /></Row>
          </Section>
        )}

        {/* ================= PERMANENT ADDRESS ================= */}
        {activeTab === "address" && (
          <Section title="Permanent Address">
            <Row label="Address"><Input name="PersentAddress" value={form.PersentAddress} onChange={handleChange} /></Row>
            <Row label="City"><Input name="perCity" value={form.perCity} onChange={handleChange} /></Row>
            <Row label="State"><Input name="perState" value={form.perState} onChange={handleChange} /></Row>
            <Row label="PIN"><Input name="PerPIN" value={form.PerPIN} onChange={handleChange} /></Row>
            <Row label="Phone"><Input name="PerPhone" value={form.PerPhone} onChange={handleChange} /></Row>
            <Row label="Country"><Input name="Percountry" value={form.Percountry} onChange={handleChange} /></Row>
            <Row label="Mobile"><Input name="Mobile" value={form.Mobile} onChange={handleChange} /></Row>
          </Section>
        )}

        {/* ================= OTHER DETAILS ================= */}
        {activeTab === "other" && (
          <Section title="Other Details">
            <Row label="District ID"><Input name="distID" value={form.distID} onChange={handleChange} /></Row>
            <Row label="City ID"><Input name="CityID" value={form.CityID} onChange={handleChange} /></Row>
            <Row label="Religion ID"><Input name="RelegionID" value={form.RelegionID} onChange={handleChange} /></Row>
            <Row label="Quota ID"><Input name="QuotaId" value={form.QuotaId} onChange={handleChange} /></Row>
            <Row label="PH"><Select name="PH" value={form.PH} onChange={handleChange} options={["Yes","No"]} /></Row>
            <Row label="Aadhar No"><Input name="AadharNo" value={form.AadharNo} onChange={handleChange} /></Row>
            <Row label="Passport No"><Input name="PassportNo" value={form.PassportNo} onChange={handleChange} /></Row>
            <Row label="Blood Group"><Input name="BloodGrp" value={form.BloodGrp} onChange={handleChange} /></Row>
            <Row label="PAN"><Input name="Pan" value={form.Pan} onChange={handleChange} /></Row>
            <Row label="Apaar ID"><Input name="ApaarID" value={form.ApaarID} onChange={handleChange} /></Row>
            <Row label="Birth ID"><Input name="BirthID" value={form.BirthID} onChange={handleChange} /></Row>
          </Section>
        )}

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <Button
            variant="secondary"
            className="bg-slate-200 text-slate-800"
            onClick={() => setForm({})}
          >
            Clear
          </Button>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => onSave(form)}
          >
            Save Student
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ================= TAB BUTTON ================= */

const TabButton = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-semibold transition
      ${active
        ? "bg-indigo-600 text-white shadow"
        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
      }`}
  >
    {label}
  </button>
);

/* ================= COMMON UI ================= */

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h5 className="font-semibold text-white bg-indigo-600 px-3 py-2 rounded mb-2">
      {title}
    </h5>
    <table className="w-full border border-slate-300 rounded bg-slate-100 text-sm">
      <tbody>{children}</tbody>
    </table>
  </div>
);

const Row = ({ label, children }) => (
  <tr className="border-b border-slate-300">
    <td className="p-2 bg-slate-200 w-1/3 font-medium text-slate-700">
      {label}
    </td>
    <td className="p-2">{children}</td>
  </tr>
);

const Input = ({ type = "text", ...props }) => (
  <input
    type={type}
    {...props}
    className="w-full border border-slate-400 bg-white rounded px-2 py-1.5
               focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800"
  />
);

const Select = ({ options = [], ...props }) => (
  <select
    {...props}
    className="w-full border border-slate-400 bg-white rounded px-2 py-1.5
               focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800"
  >
    <option value="">Select</option>
    {options.map((o, i) => (
      <option key={i}>{o}</option>
    ))}
  </select>
);
