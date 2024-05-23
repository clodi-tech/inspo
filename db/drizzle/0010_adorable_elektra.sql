ALTER TABLE "inspos" ADD COLUMN "tag" text DEFAULT 'none' NOT NULL;--> statement-breakpoint
ALTER TABLE "inspos" DROP COLUMN IF EXISTS "tagId";