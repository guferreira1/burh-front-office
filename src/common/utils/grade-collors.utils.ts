const gradeColors = {
  red: {
    min: 0,
    max: 5.99,
  },
  yellow: {
    min: 6,
    max: 7.99,
  },
  green: {
    min: 8,
    max: 10,
  },
};

export const getColorByGrade = (grade: number) => {
  const color = Object.entries(gradeColors).find(([_, range]) => {
    return grade >= range.min && grade <= range.max;
  });

  return color ? color[0] : null;
};
