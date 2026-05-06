"use client";

import { useState } from "react";

type Answers = {
  mainProblem?: string;
  fallAsleepTime?: string;
  wakeNight?: string;
  sleepTime?: string;
  wakeTime?: string;
  daytimeSleepiness?: string;
  apneaSignals?: string;
  morningSymptoms?: string;
  mentalState?: string;
  caffeine?: string;
  morningLight?: string;
  duration?: string;
};

type ResultType =
  | "insomnia_pattern"
  | "circadian_disruption"
  | "stress_anxiety_related"
  | "possible_apnea_risk";

export default function SleepAssessmentEngine() {
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<ResultType | null>(null);

  const updateAnswer = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const calculate = () => {
    let insomnia = 0;
    let circadian = 0;
    let stress = 0;
    let apnea = 0;

    // --- Insomnia ---
    if (
      answers.mainProblem === "cannot_sleep" ||
      answers.mainProblem === "wake_night" ||
      answers.mainProblem === "wake_early"
    ) insomnia += 2;

    if (answers.fallAsleepTime === "45_90") insomnia += 2;
    if (answers.fallAsleepTime === "90_plus") insomnia += 3;

    if (answers.wakeNight === "4_plus") insomnia += 2;

    if (answers.duration === "3_months_plus") insomnia += 2;

    if (
      answers.daytimeSleepiness === "often" ||
      answers.daytimeSleepiness === "very_often"
    ) insomnia += 1;

    // --- Circadian ---
    if (answers.mainProblem === "irregular") circadian += 3;
    if (answers.sleepTime === "after_2") circadian += 3;
    if (answers.sleepTime === "varies") circadian += 2;
    if (answers.wakeTime === "after_10") circadian += 2;
    if (answers.wakeTime === "varies") circadian += 2;

    if (
      answers.morningLight === "rarely" ||
      answers.morningLight === "never"
    ) circadian += 1;

    if (answers.caffeine === "evening") circadian += 1;

    // --- Stress ---
    if (answers.mentalState === "anxious") stress += 3;
    if (answers.mentalState === "thinking") stress += 2;
    if (answers.mentalState === "tense") stress += 2;
    if (answers.mentalState === "frustrated") stress += 2;

    if (answers.mainProblem === "cannot_sleep") stress += 1;
    if (
      answers.fallAsleepTime === "45_90" ||
      answers.fallAsleepTime === "90_plus"
    ) stress += 1;

    // --- Apnea ---
    if (answers.mainProblem === "tired") apnea += 2;

    if (answers.daytimeSleepiness === "often") apnea += 2;
    if (answers.daytimeSleepiness === "very_often") apnea += 3;

    if (answers.apneaSignals === "yes") apnea += 4;
    if (answers.apneaSignals === "sometimes") apnea += 2;

    if (answers.morningSymptoms === "often") apnea += 2;
    if (answers.morningSymptoms === "sometimes") apnea += 1;

    // --- Determine winner ---
    const scores = {
      insomnia_pattern: insomnia,
      circadian_disruption: circadian,
      stress_anxiety_related: stress,
      possible_apnea_risk: apnea,
    };

    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

    setResult(top as ResultType);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold">Sleep Assessment</h2>

      {/* MAIN PROBLEM */}
      <div>
        <p>What is your main problem?</p>
        <select onChange={(e) => updateAnswer("mainProblem", e.target.value)}>
          <option value="">Select</option>
          <option value="cannot_sleep">Cannot fall asleep</option>
          <option value="wake_night">Wake during night</option>
          <option value="wake_early">Wake too early</option>
          <option value="tired">Sleep but feel tired</option>
          <option value="irregular">Irregular schedule</option>
        </select>
      </div>

      {/* FALL ASLEEP TIME */}
      <div>
        <p>Time to fall asleep?</p>
        <select onChange={(e) => updateAnswer("fallAsleepTime", e.target.value)}>
          <option value="">Select</option>
          <option value="under_20">Under 20 min</option>
          <option value="20_45">20–45 min</option>
          <option value="45_90">45–90 min</option>
          <option value="90_plus">90+ min</option>
        </select>
      </div>

      {/* DAYTIME SLEEPINESS */}
      <div>
        <p>Daytime sleepiness?</p>
        <select onChange={(e) => updateAnswer("daytimeSleepiness", e.target.value)}>
          <option value="">Select</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="often">Often</option>
          <option value="very_often">Very often</option>
        </select>
      </div>

      {/* APNEA SIGNAL */}
      <div>
        <p>Snoring / gasping?</p>
        <select onChange={(e) => updateAnswer("apneaSignals", e.target.value)}>
          <option value="">Select</option>
          <option value="no">No</option>
          <option value="sometimes">Sometimes</option>
          <option value="yes">Yes often</option>
        </select>
      </div>

      {/* MENTAL STATE */}
      <div>
        <p>Mental state at bedtime?</p>
        <select onChange={(e) => updateAnswer("mentalState", e.target.value)}>
          <option value="">Select</option>
          <option value="calm">Calm</option>
          <option value="thinking">Thinking</option>
          <option value="anxious">Anxious</option>
          <option value="tense">Tense</option>
          <option value="frustrated">Frustrated</option>
        </select>
      </div>

      <button
        onClick={calculate}
        className="bg-black text-white px-4 py-2"
      >
        Get Result
      </button>

      {result && (
        <div className="border p-4 mt-4">
          <h2 className="font-bold">Your result:</h2>

          {result === "insomnia_pattern" && <p>Insomnia-type pattern</p>}
          {result === "circadian_disruption" && <p>Circadian rhythm disruption</p>}
          {result === "stress_anxiety_related" && <p>Stress/anxiety-related sleep issue</p>}
          {result === "possible_apnea_risk" && <p>Possible sleep apnea risk</p>}
        </div>
      )}
    </div>
  );
}