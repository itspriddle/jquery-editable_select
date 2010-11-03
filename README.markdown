# jQuery Editable Select

This plugin adds a 'Customize' option to dropdowns. When that option is
selected, the select element changes into a text field.

## Usage

    $('select.editable').editableSelect({
      title: 'Other',
      key: 'other'
    });

    <label for="movie">Best Movie Ever</label>
    <select class="editable" name="movie">
      <option>Back To The Future</option>
      <option>Robocop</option>
      <option>The Matrix</option>
    </select>

The dropdown above will have an additional option appended to the bottom,
`<option value="other">Other</option>`. If the user selects this, the select
tag will be changed to the following input tag:

    <input type="text" name="movie" />

# License

See LICENSE in this repo.
