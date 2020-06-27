import { expect } from "chai";
import Utils from "../../api/server/utils/Utils";

describe("Testing the utils class", () => {
  it("It should has basic property", (done) => {
    const util = new Utils();
    expect(util).to.include({
      statusCode: null,
      type: null,
      data: null,
      message: null,
    });
    done();
  });

  it("It should has successfull property when success function is invoked", (done) => {
    const util = new Utils();
    util.setSuccess(200);
    expect(util.statusCode).to.equal(200);
    done();
  });

  it("It should return message property when message is passed", (done) => {
    const util = new Utils();
    util.setSuccess(200, "It's a success");
    expect(util.message).to.includes("It's a success");
    done();
  });
});
