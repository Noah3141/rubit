export const heatScore = (commonality: number | null): string => {
    const heatScore = 1 / (commonality ?? 1);
    return `rgb(${heatScore}, ${-0.04 * heatScore + 255}, 0)`;
};
