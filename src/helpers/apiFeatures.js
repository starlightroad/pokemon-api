import setStringPadding from './pad.js';
import replaceStatEntries from './stats.js';

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObject = { ...replaceStatEntries({ ...this.queryString }) };

    if (queryObject.no) queryObject.no = setStringPadding(queryObject.no, 3, 0);

    if (queryObject.type) queryObject.type = { all: queryObject.type };

    if (queryObject.tm) queryObject.tm = setStringPadding(queryObject.tm, 2, 0);

    if (queryObject.hm) queryObject.hm = setStringPadding(queryObject.hm, 2, 0);

    let queryString = JSON.stringify(queryObject);

    queryString = queryString.replace(
      /\b(gte|gt|lte|lt|all)\b/g,
      (match) => `$${match}`
    );

    this.query = this.query.find(JSON.parse(queryString));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    }

    return this;
  }

  limit() {
    if (this.queryString.limit) {
      const limit = +this.queryString.limit;

      this.query = this.query.limit(limit);
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');

      this.query = this.query.select(fields);
    }

    return this;
  }
}

export default APIFeatures;
