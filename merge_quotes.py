#!/usr/bin/env python3

import json
import re
import datetime

def load_json_and_extract_comments(file_path, preserve_comments=False):
    """
    Reads a JS/JSON-like file, extracts JS-style line comments (//...) and block comments (/*...*/),
    strips them out for valid JSON parsing, then returns:
       - The parsed JSON data (dict).
       - A list of the extracted comment strings (if preserve_comments=True).
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        original_text = f.read()

    # Regex pattern to match both single-line and multi-line comments
    #  - // comment
    #  - /* multi-line comment */
    comment_pattern = re.compile(r'/\*.*?\*/|//.*', flags=re.DOTALL)

    if preserve_comments:
        # Find all comments in the file
        comments = comment_pattern.findall(original_text)
    else:
        comments = []

    # Remove all those comments to produce valid JSON
    cleaned_text = comment_pattern.sub('', original_text)

    # Now parse the cleaned text as strict JSON
    # (Assumes the remainder is valid JSON: keys & strings in double quotes, etc.)
    parsed_data = json.loads(cleaned_text)

    return parsed_data, comments


def merge_quotes(quotes_file, new_quotes_file, output_file):
    """
    Merges two JSON/JS quote files into a single .js output file with quotes 
    for each day from 01-01 to 12-31 (365 days total).
    
    - If a date is present in quotes_file (primary), take that.
    - Otherwise, pull the next quote from new_quotes_file (secondary) in order.
    - If both run out, fill with empty fields.
    - Preserve comments from the primary file and place them in the output .js file.
    """

    # --- 1. Load primary data (preserving its comments) ---
    quotes_primary, primary_comments = load_json_and_extract_comments(quotes_file, preserve_comments=True)

    # --- 2. Load secondary data (ignore its comments) ---
    quotes_secondary, _ = load_json_and_extract_comments(new_quotes_file, preserve_comments=False)

    # Convert the secondary dict into a list for serial iteration
    secondary_list = list(quotes_secondary.items())
    # (Optional) sort if desired: secondary_list.sort(key=lambda x: x[0])
    secondary_index = 0

    # --- 3. Generate all dates from 01-01 through 12-31 (365 days) ---
    all_days = []
    start_date = datetime.date(2021, 1, 1)
    end_date = datetime.date(2021, 12, 31)
    delta = datetime.timedelta(days=1)

    current_date = start_date
    while current_date <= end_date:
        all_days.append(current_date.strftime("%m-%d"))
        current_date += delta

    # --- 4. Merge logic ---
    merged_quotes = {}

    for day in all_days:
        if day in quotes_primary:
            # Date found in primary -> keep it
            merged_quotes[day] = quotes_primary[day]
        else:
            # Otherwise, take the next from secondary (if any left)
            if secondary_index < len(secondary_list):
                _, quote_data = secondary_list[secondary_index]
                secondary_index += 1
                merged_quotes[day] = quote_data
            else:
                # None left in secondary -> fill with empty
                merged_quotes[day] = {
                    "quote": "",
                    "philosopher": "",
                    "category": ""
                }

    # --- 5. Write the final output as a .js file ---
    # We'll place the primary file's comments at the top, 
    # then export the merged quotes object.
    with open(output_file, 'w', encoding='utf-8') as f:

        # If there were comments in the primary file, print them first.
        # We'll ensure each block (// or /* ... */) is on its own line.
        for comment in primary_comments:
            # If it's a block comment, it may span multiple lines.
            # We'll just write it as-is, but ensure it ends with a newline:
            if not comment.endswith('\n'):
                comment += '\n'
            f.write(comment)

        f.write("\n// Merged quotes from quotes.js (primary) and new_quotes.js (secondary)\n")
        f.write("// Automatically generated file. Contains 365 days of quotes.\n\n")

        # We'll export a JavaScript object with the merged quotes.
        f.write("export default ")

        # Dump the merged_quotes as valid JSON (which is also valid JS object literal)
        json.dump(merged_quotes, f, indent=2, ensure_ascii=False)

        f.write(";\n")

    print(f"Successfully created merged .js quotes file: {output_file}")


if __name__ == "__main__":
    # Example usage:
    merge_quotes("quotes_old.js", "new_quotes.js", "merged_quotes_new.js")
