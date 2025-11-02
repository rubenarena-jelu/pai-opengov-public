// You can edit these values 2 minutes before a meeting to look fresh.

const dashboardStats = {
  majorityCohesion: "92%",
  oppositionCohesion: "77%",
  volatility: "Low",

  tensionIndex: "3.1 / 10",
  whipDefiance: "2 MPs",
  urgentVotes: "1",

  fastTracked: "4",
  committeePush: "Defense, Budget",
  riskWindow: "48h",

  crossSupport: "3 with crossover",
  helperFaction: "Minor Opposition B",
  helperReliability: "82%",

  xbSupportRate: "3 / 7 last key votes",

  mpName: "On. Rossi Martina",
  mpParty: "Majority Bloc",
  mpRiskScore: "Low (2.4 / 10)",
  mpLoyalty30: "93%",
  mpDeviationTrend: "Stable",
  mpWhipWarnings: "0",
  mpTopThemes: "Budget discipline, SMEs, Industry incentives",
  mpCommittee: "Budget & Planning",
  mpMedia: "Rising",
  mpOutOfLine: "2 (economic policy)",
  mpSensitivity: "Medium",
  mpRiskWindow: "7 days",

  allyFaction: "Minor Opposition B",
  allyReliability: "82%",
  allyPrice: "Regional development guarantees",

  fractureDissenters: "2 MPs",
  fractureProfile: "Industrial policy hardliners",
  fractureWindow: "48h"
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

document.addEventListener("DOMContentLoaded", () => {
  setText("stat-majority-cohesion", dashboardStats.majorityCohesion);
  setText("stat-opposition-cohesion", dashboardStats.oppositionCohesion);
  setText("stat-volatility", dashboardStats.volatility);

  setText("stat-tension-index", dashboardStats.tensionIndex);
  setText("stat-whip-defiance", dashboardStats.whipDefiance);
  setText("stat-urgent-votes", dashboardStats.urgentVotes);

  setText("stat-fasttracked", dashboardStats.fastTracked);
  setText("stat-committee-push", dashboardStats.committeePush);
  setText("stat-risk-window", dashboardStats.riskWindow);

  setText("stat-cross-support", dashboardStats.crossSupport);
  setText("stat-helper-faction", dashboardStats.helperFaction);
  setText("stat-helper-reliability", dashboardStats.helperReliability);

  setText("xb-support-rate", dashboardStats.xbSupportRate);

  setText("mp-name", dashboardStats.mpName);
  setText("mp-party", dashboardStats.mpParty);
  setText("mp-risk-score", dashboardStats.mpRiskScore);
  setText("mp-loyalty-30", dashboardStats.mpLoyalty30);
  setText("mp-deviation-trend", dashboardStats.mpDeviationTrend);
  setText("mp-whip-warnings", dashboardStats.mpWhipWarnings);
  setText("mp-top-themes", dashboardStats.mpTopThemes);
  setText("mp-committee", dashboardStats.mpCommittee);
  setText("mp-media", dashboardStats.mpMedia);
  setText("mp-out-of-line", dashboardStats.mpOutOfLine);
  setText("mp-sensitivity", dashboardStats.mpSensitivity);
  setText("mp-risk-window", dashboardStats.mpRiskWindow);

  setText("ally-faction", dashboardStats.allyFaction);
  setText("ally-reliability", dashboardStats.allyReliability);
  setText("ally-price", dashboardStats.allyPrice);

  setText("fracture-dissenters", dashboardStats.fractureDissenters);
  setText("fracture-profile", dashboardStats.fractureProfile);
  setText("fracture-window", dashboardStats.fractureWindow);
});
