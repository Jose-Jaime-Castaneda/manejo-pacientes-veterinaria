import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    return (
        <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" value={patient.id} />
            <PatientDetailItem label="Nombre" value={patient.name} />
            <PatientDetailItem label="Prpietario" value={patient.caretaker} />
            <PatientDetailItem label="Correo" value={patient.email} />
            <PatientDetailItem label="Sintómas" value={patient.symptoms} />
            <PatientDetailItem label="Fecha de Alta" value={patient.date.toString()} />
        </div>
    );
};