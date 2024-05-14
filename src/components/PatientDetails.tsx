import { usePatientStore } from "../store/store";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    return (
        <div className=" mx-5 my-10 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" value={patient.id} />
            <PatientDetailItem label="Nombre" value={patient.name} />
            <PatientDetailItem label="Caretaker" value={patient.caretaker} />
            <PatientDetailItem label="Email" value={patient.email} />
            <PatientDetailItem label="Symptoms" value={patient.symptoms} />
            <PatientDetailItem label="Fecha de Alta" value={patient.date.toString()} />
        </div>
    );
};