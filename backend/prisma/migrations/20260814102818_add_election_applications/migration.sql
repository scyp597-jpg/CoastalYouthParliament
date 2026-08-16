-- CreateTable
CREATE TABLE "ElectionPosition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "electionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isOpen" BOOLEAN NOT NULL DEFAULT false,
    "maxApplicants" INTEGER NOT NULL DEFAULT 100,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ElectionPosition_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ElectionApplication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "positionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "electionId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "constituency" TEXT,
    "age" INTEGER,
    "description" TEXT NOT NULL,
    "reasonForApplying" TEXT,
    "changeChampion" TEXT,
    "comments" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "appliedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ElectionApplication_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "ElectionPosition" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ElectionApplication_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ElectionApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "ElectionPosition_electionId_idx" ON "ElectionPosition"("electionId");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionPosition_electionId_title_key" ON "ElectionPosition"("electionId", "title");

-- CreateIndex
CREATE INDEX "ElectionApplication_positionId_idx" ON "ElectionApplication"("positionId");

-- CreateIndex
CREATE INDEX "ElectionApplication_userId_idx" ON "ElectionApplication"("userId");

-- CreateIndex
CREATE INDEX "ElectionApplication_electionId_idx" ON "ElectionApplication"("electionId");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionApplication_positionId_userId_key" ON "ElectionApplication"("positionId", "userId");
