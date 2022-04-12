import Team from "../team";

test("Add character", () => {
  const team = new Team();
  team.add("zombie");
  expect(team.members).toContain("zombie");
});

test("Add character second time", () => {
  const team = new Team();
  team.add("zombie");
  expect(() => team.add("zombie")).toThrowError();
});

test("Add all characters", () => {
  const team = new Team();
  team.addAll("bowman", "magician", "daemon", "swordsman");
  expect(team.members).toContain("bowman", "magician", "daemon", "swordsman");
  expect(team.members.size).toBe(4);
});

test("check toArray", () => {
  const team = new Team();
  team.members.clear();
  team.addAll("daemon", "zombie", "bowman");
  expect(team.toArray()).toEqual(["daemon", "zombie", "bowman"]);
});
