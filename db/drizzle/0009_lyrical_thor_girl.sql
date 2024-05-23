DROP TABLE "tags";--> statement-breakpoint
ALTER TABLE "inspos" DROP CONSTRAINT "inspos_tagId_tags_id_fk";
--> statement-breakpoint
ALTER TABLE "inspos" ALTER COLUMN "tagId" SET DEFAULT 'none';--> statement-breakpoint
ALTER TABLE "inspos" ALTER COLUMN "tagId" SET NOT NULL;