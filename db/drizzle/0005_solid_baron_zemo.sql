ALTER TABLE "bookmarks" RENAME TO "inspos";--> statement-breakpoint
ALTER TABLE "inspos" DROP CONSTRAINT "bookmarks_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inspos" ADD CONSTRAINT "inspos_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
