CREATE TABLE IF NOT EXISTS "AvailableIngredients" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"ingredient_type_id" integer,
	CONSTRAINT "AvailableIngredients_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "AvailableSteps" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" text,
	"required" boolean DEFAULT true,
	"step_number" smallint,
	CONSTRAINT "AvailableSteps_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "IngredientTypes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "IngredientTypes_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "IngredientsInRecipe" (
	"id" serial PRIMARY KEY NOT NULL,
	"weight_in_grams" smallint,
	"temperature_in_celsius" smallint,
	"available_ingredient_id" integer,
	"step_in_recipe_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"timestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Steps" (
	"id" serial PRIMARY KEY NOT NULL,
	"instructions" text,
	"duration_in_minutes" interval minute,
	"desired_dough_temperature_in_celsius" smallint,
	"recipe_id" integer,
	"available_step_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "AvailableIngredients" ADD CONSTRAINT "AvailableIngredients_ingredient_type_id_IngredientTypes_id_fk" FOREIGN KEY ("ingredient_type_id") REFERENCES "IngredientTypes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "IngredientsInRecipe" ADD CONSTRAINT "IngredientsInRecipe_available_ingredient_id_AvailableIngredients_id_fk" FOREIGN KEY ("available_ingredient_id") REFERENCES "AvailableIngredients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "IngredientsInRecipe" ADD CONSTRAINT "IngredientsInRecipe_step_in_recipe_id_Steps_id_fk" FOREIGN KEY ("step_in_recipe_id") REFERENCES "Steps"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Steps" ADD CONSTRAINT "Steps_recipe_id_Recipes_id_fk" FOREIGN KEY ("recipe_id") REFERENCES "Recipes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Steps" ADD CONSTRAINT "Steps_available_step_id_AvailableSteps_id_fk" FOREIGN KEY ("available_step_id") REFERENCES "AvailableSteps"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
