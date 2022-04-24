import app from "../app";
import request from "supertest";

describe("signup", () => {
  it("returns status code 200 if email and password is passed", async () => {
    const res = await request(app)
      .post("/api/signup")
      .send({ email: "email@test.com", password: "test" });
    expect(res.statusCode).toEqual(200);
  });
  it("returns jwt token if email and password is passed", async () => {
    const res = await request(app)
      .post("/api/signup")
      .send({ email: "email@test.com", password: "test" });
    expect(res.body.accessToken);
  });
  it("returns status code 400 if email or password not passed", async () => {
    const res = await request(app).post("/api/signup").send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Email and password are required fields");
  });
});

describe("process", () => {
  it("returns status code 200", async () => {
    const login = await request(app)
      .post("/api/signup")
      .send({ email: "email@test.com", password: "test" });
    const res = await request(app)
      .post("/api/process")
      .set("Authorization", `Bearer ${login.body.accessToken}`);
    expect(res.statusCode).toEqual(200);
  });
  it("returns status code 403 if token not passed or in case of bad token", async () => {
    const res = await request(app).post("/api/process");
    expect(res.statusCode).toEqual(403);
  });
});

describe("fetch", () => {
  it("returns status code 200", async () => {
    const login = await request(app)
      .post("/api/signup")
      .send({ email: "email@test.com", password: "test" });
    const res = await request(app)
      .get("/api/fetch")
      .set("Authorization", `Bearer ${login.body.accessToken}`);
    expect(res.statusCode).toEqual(200);
  });
  it("returns array of records if token passed", async () => {
    const login = await request(app)
      .post("/api/signup")
      .send({ email: "email@test.com", password: "test" });
    const res = await request(app)
      .get("/api/fetch")
      .set("Authorization", `Bearer ${login.body.accessToken}`);
    expect(res.body.data).toBeInstanceOf(Array);
  });
  it("returns status code 403 if token not passed or in case of bad token", async () => {
    const res = await request(app).post("/api/process");
    expect(res.statusCode).toEqual(403);
  });
});
