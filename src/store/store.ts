import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "../types";

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
};

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],

  addPatient: (data) => {
    const newPatient = { ...data, id: uuidv4() };

    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },

  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id),
    }));
  },
}));
