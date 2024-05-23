CREATE TABLE IF NOT EXISTS "tags" (
	"id" text PRIMARY KEY NOT NULL,
	"tag" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "inspos" ADD COLUMN "tagId" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inspos" ADD CONSTRAINT "inspos_tagId_tags_id_fk" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
