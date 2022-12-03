const replaceStatEntries = (queryObject) => {
  const queryObjectCopy = { ...queryObject };
  const customFields = [
    'stats_hp',
    'stats_attack',
    'stats_defense',
    'stats_speed',
    'stats_special'
  ];
  const queryKeys = Object.keys(queryObject);

  for (let i = 0; i < queryKeys.length; i += 1) {
    const query = queryKeys[i];

    if (customFields.includes(query)) {
      const statValue = queryObject[query];
      const dataSplit = query.split('_');

      queryObjectCopy[`stats.${dataSplit[1]}`] = statValue;
      delete queryObjectCopy[query];
    }
  }

  return queryObjectCopy;
};

export default replaceStatEntries;
