module.exports = {
  name: 'angular-seed',
  preset: 'jest-preset-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts', '<rootDir>/test/global.mock.ts'],
  moduleNameMapper: {
    '\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/test/file-mocks.js', // mock url-loader paths so ux-framework doesn't break tests
    '^url-loader!../assets/(.*)$': '<rootDir>/test/file-mocks.js',
    'lodash-es': '<rootDir>/test/lodash-mocks.js',
    '@environments/(.*)$': '<rootDir>/projects/app/src/app/core/$1',
    '@core/(.*)$': '<rootDir>/projects/app/src/app/core/$1',
    '@models/(.*)$': '<rootDir>/projects/app/src/app/models/$1',
    '@constants/(.*)$': '<rootDir>/projects/app/src/app/constants/$1',
    '@modules/(.*)$': '<rootDir>/projects/app/src/app/modules/$1',
    '@shared/(.*)$': '<rootDir>/projects/app/src/app/shared/$1',
    '@services/(.*)$': '<rootDir>/projects/app/src/app/services/$1',
    '@stores/(.*)$': '<rootDir>/projects/app/src/app/stores/$1',
    '@pages/(.*)$': '<rootDir>/projects/app/src/app/pages/$1',
    '@security': '<rootDir>/projects/app/src/app/security/index',
    '@app-commons': '<rootDir>/projects/app-commons/index',
    '@app-ui': '<rootDir>/projects/app-ui/src/public-api'
  },
  collectCoverage: false, // must be false, otherwise local debug does not work. Must be true in angular.json!
  coverageDirectory: './coverage/details',
  reporters: ['default'],
  coverageReporters: ['json', 'html', 'text-summary', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*mock.*.ts$', 'file-mocks.js'],
  watchPathIgnorePatterns: ['.*jest-stare.*\\.js'],
  testRegex: '.*spec.ts$'
};
