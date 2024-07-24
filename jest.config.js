module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    },
    setupFiles: ['<rootDir>/setupTests.js'], // jest mocking 세팅
    setupFilesAfterEnv: ['./jest.setup.ts'], // 국제화 관련 세팅
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testMatch: ['<rootDir>/src/**/*.test.tsx'], // 테스트 파일 제한
  }