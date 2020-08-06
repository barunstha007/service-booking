const request = require("supertest");
const expect = require("chai").expect;
const searchdetails = require("../models/Packages.model");
const app = require("../server");
const Mongoose = require("mongoose");

describe("Package search : GET ALL/", () => {
  describe("RETRIEVE PACKAGES DETAILS", () => {
    beforeEach(function (done) {
      this.timeout(9000);
      searchdetails.deleteMany({}, (err) => {
        if (err) return done(err);

        done();
      });
    });

    it("When packages is selected it should show packages details", async () => {
      packageSearch = {
        packages: "50hours",
      };
      const res = await request(app).get("/packages/all").send(packageSearch);
      expect(res.status).to.equal(200);
    });
  });
});

describe("ADD NEW PACKAGE: POST/", () => {
  beforeEach(function (done) {
    this.timeout(9000);
    searchdetails.deleteMany({}, (err) => {
      if (err) return done(err);

      done();
    });
  });
  it("When searchdetails is saved to database it should return package object with valid mongo id ", async () => {
    const searchdetails = {
      title: "50hr Service Package",
      desc: "We serve 50hr servicing package",
    };

    const res = await request(app).post("/packages/add").send(searchdetails);
    expect(res.body).to.be.an("object");
    expect(Mongoose.Types.ObjectId.isValid(res.body._id)).to.equal(true);
  });
});
