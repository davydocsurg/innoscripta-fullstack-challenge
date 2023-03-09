type SearchFields = {
    keyword: string;
    tag?: string;
    source: string;
    per_page?: number;
    current_page?: number;
    from_date?: string;
    end_date?: string;
    // begin_date?: string;
};

export default SearchFields;
