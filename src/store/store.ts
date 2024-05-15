import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "../types";

type PatientState = {
  patients: Patient[];
  activeID: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
};

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeID: "",

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

    getPatientById: (id) => {
      set(() => ({
        activeID: id,
      }));
    },
  }))
);
