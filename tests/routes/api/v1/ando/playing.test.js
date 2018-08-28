const chai = require('chai');

const app = require('../../../../../src/routes/app.js');
const PlayingModel = require('../../../../../src/models/ando/PlayingModel.js');
const {
  prepareDB,
  deleteAllDataFromDB,
} = require('../../../../../src/utils/db.js');

const basePath = '/api/v1';

// describe('Request pieces', () => {
//   // beforeAll: ブロック間で一度だけ実行する事前処理
//   beforeAll(prepareDB);
//   // afterEach: テスト毎に実行する事後処理
//   afterEach(deleteAllDataFromDB);

//   describe('Set', () => {
//     it('Set a piece', async () => {
//       // Given
//       const x = 0;
//       const y = 0;
//       const userId = 1;

//       // When
//       const playingMatcher = {
//         x,
//         y,
//         userId,
//       };

//       const response = await chai.request(app)
//         .get(`${basePath}/ando/playing`)
//         .set('content-type', 'application/x-www-form-urlencoded')
//         .send(playingMatcher);

//       // Then
//       // expect(response.body).toMatchObject({
//       //   x: expect.any(Number),
//       //   y: expect.any(Number),
//       //   userId: expect.any(Number),
//       // });
//       expect(response.body).toMatchObject(playingMatcher);
//     });
//   });
// });
describe('Request pieces', () => {
  // beforeAll: ブロック間で一度だけ実行する事前処理
  beforeAll(prepareDB);
  // afterEach: テスト毎に実行する事後処理
  // afterEach(deleteAllDataFromDB);

  describe('set', () => {
    it('set a piece', async () => {
      // Given
      const x = 0;
      const y = 0;
      const userId = 1;

      // When
      const playingMatcher = {
        x,
        y,
        userId,
      };

      const response = await chai.request(app)
        .post(`${basePath}/ando/playing`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(playingMatcher);

      // Then
      expect(response.body).toMatchObject({
        x: expect.any(Number),
        y: expect.any(Number),
        userId: expect.any(Number),
      });
      const playing = await PlayingModel.findOne({ userId });
      expect(playing).toMatchObject(playingMatcher);
    });

    it('set a piece', async () => {
      // Given
      const x = 1;
      const y = 1;
      const userId = 2;

      // When
      const playingMatcher = {
        x,
        y,
        userId,
      };

      const response = await chai.request(app)
        .post(`${basePath}/ando/playing`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(playingMatcher);

      // Then
      expect(response.body).toMatchObject({
        x: expect.any(Number),
        y: expect.any(Number),
        userId: expect.any(Number),
      });
      const playing = await PlayingModel.findOne({ userId });
      expect(playing).toMatchObject(playingMatcher);
    });
  });
});