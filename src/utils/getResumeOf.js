export const getResumeOF = (papers) => {
  const resume = papers.reduce((resume, { profit }) => resume + profit, 0);
  const resumeFormated = Number(resume.toFixed(2));
  return resumeFormated;
};
