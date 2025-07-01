import { subjectsColors } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines class names cleanly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Gets background color for a subject from the subjectColors map
export function getSubjectColor(subject: string): string {
  return subjectsColors[subject as keyof typeof subjectsColors] || "#E5E7EB"; // fallback to a default color if not found
}
