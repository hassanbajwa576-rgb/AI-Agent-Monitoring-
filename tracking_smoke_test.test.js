const test = require("node:test");
const assert = require("node:assert");
const { trackingStatus, trackingRunLabel } = require("./tracking_smoke_test.js");

test("trackingStatus describes the smoke test", () => {
  assert.match(trackingStatus(), /smoke test/);
});

test("trackingRunLabel includes the ISO timestamp", () => {
  const date = new Date("2026-10-01T00:00:00.000Z");
  assert.strictEqual(trackingRunLabel(date), "run at 2026-10-01T00:00:00.000Z");
});
