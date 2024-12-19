export const getTransferWord = (count: number): string => {
  switch (count) {
    case 0: return 'Без пересадок';
    case 1:
      return `${count} пересадка`;
    case 2:
    case 3:
    case 4:
      return `${count} пересадки`;
    default:
      return `${count} пересадок`;
  }
}
