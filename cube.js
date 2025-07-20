class RubiksCube {
  constructor() {
    this.faces = {
      U: Array(9).fill('w'),
      D: Array(9).fill('y'),
      F: Array(9).fill('g'),
      B: Array(9).fill('b'),
      L: Array(9).fill('o'),
      R: Array(9).fill('r')
    };
    this.scrambleMoves = [];
  }

  rotateFaceClockwise(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[6], f[3], f[0],
      f[7], f[4], f[1],
      f[8], f[5], f[2]
    ];
  }

  rotate(face) {
    this.scrambleMoves.push(face);
    this.rotateFaceClockwise(face);

    if (face === 'F') {
      const U = this.faces.U, D = this.faces.D;
      const L = this.faces.L, R = this.faces.R;
      const temp = [U[6], U[7], U[8]];
      [U[6], U[7], U[8]] = [L[8], L[5], L[2]];
      [L[2], L[5], L[8]] = [D[2], D[1], D[0]];
      [D[0], D[1], D[2]] = [R[0], R[3], R[6]];
      [R[0], R[3], R[6]] = temp;
    }

    this.display();
  }

  scramble(times = 10) {
    this.scrambleMoves = [];
    const moves = ['F'];
    for (let i = 0; i < times; i++) {
      const move = moves[Math.floor(Math.random() * moves.length)];
      this.rotate(move);
    }
  }

  solve() {
    const reversed = [...this.scrambleMoves].reverse();
    reversed.forEach(move => {
      this.rotateFaceClockwise(move);
    });
    this.display();
  }

  display() {
    const cubeString = Object.values(this.faces).flat().join('');
    document.getElementById("cube-container").innerHTML = getCubeSvg(cubeString);
  }
}

const cube = new RubiksCube();
cube.display();

function scrambleCube() {
  cube.scramble(5);
}

function solveCube() {
  cube.solve();
}